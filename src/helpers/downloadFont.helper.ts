import axios from 'axios';
import { saveAs } from 'file-saver';
import JsZip from 'jszip';

export const downloadFontZip = async (css: string, fontSrcPrefix: string) => {
  const fontFaceSrcRegex = /src:\s*url\(([^)]*)\)/g;
  const fontFaceFontFamilyRegex = /font-family:\s*([^;]*)/g;
  const fontFaceFontWeightRegex = /font-weight:\s*([^;]*)/g;
  const fontFaceFontStyleRegex = /font-style:\s*([^;]*)/g;

  const lines = css.split('\n');
  const linksToDownload = [];

  let characterSet = '';
  let fonStyle = '';
  let fontWeight = '';
  let src = '';
  let frontFamily = '';

  for (const lineRaw of lines) {
    const line = lineRaw.trim();
    if (line.startsWith('/*') && line.endsWith('*/')) {
      characterSet = line?.replace('/*', '')?.replace('*/', '').trim() || '';
    }
    if (line.startsWith('font-style:')) {
      fonStyle = line?.match(fontFaceFontStyleRegex)?.[0]?.replace('font-style:', '')?.trim() || '';
    }
    if (line.startsWith('font-weight:')) {
      fontWeight = line?.match(fontFaceFontWeightRegex)?.[0]?.replace('font-weight:', '')?.trim() || '';
    }
    if (line.startsWith('font-family:')) {
      frontFamily = line?.match(fontFaceFontFamilyRegex)?.[0]?.replace('font-family:', '')?.trim() || '';
    }
    if (line.startsWith('src:')) {
      src =
        line?.match(fontFaceSrcRegex)?.[0]?.replace('src:', '')?.replace('url(', '')?.replace(')', '')?.trim() || '';

      const format = src?.split('.')?.pop();

      if (src && format && frontFamily && fonStyle && fontWeight) {
        linksToDownload.push({
          src,
          fileName: `${frontFamily}-${characterSet}-${fonStyle}-${fontWeight}.${format}`
            .replace(/['"]/gm, '')
            .toLowerCase(),
        });
      }
    }
  }

  let updatedCss = css;
  for (const { src, fileName } of linksToDownload) {
    updatedCss = updatedCss.replace(src, `'${fontSrcPrefix}${fileName}'`);
  }
  const responses = await Promise.all(
    linksToDownload.map(async ({ src, fileName }) => {
      const res = await axios.get(src, { responseType: 'blob' });

      return {
        fileName,
        blob: res.data,
      };
    }),
  );

  const zip = new JsZip();
  for (const { fileName, blob } of responses) {
    zip.file(fileName, blob);
  }

  zip.file('font.css', updatedCss);

  const zipBlob = await zip.generateAsync({ type: 'blob' });
  saveAs(zipBlob, 'font-files.zip');
};
