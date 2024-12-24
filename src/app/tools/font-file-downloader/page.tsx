"use client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import axios from "axios";
import { downloadFontZip } from "@/helpers/downloadFont.helper";
import InfiniteLoaderIcon from "@/components/icons/InfiniteLoaderIcon";

const FontFileDownloader = () => {
    const [cssUrl, setCssUrl] = useState("");
    const { toast } = useToast();
    const [fontSrcPrefix, setFontSrcPrefix] = useState("");
    const [loading, setLoading] = useState(false);

    const onClickProcessAndDownload = async () => {
        setLoading(true);
        try {
            const response = await axios.get(cssUrl);
            await downloadFontZip(response.data, fontSrcPrefix);
            toast({
                title: "Success",
                description: "Font files downloaded successfully",
                duration: 5000,
            });
        } catch (error) {
            toast({
                title: "Error",
                description: error?.message || "Something went wrong",
                variant: "destructive",
                duration: 5000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="container mx-auto px-4 py-10">
            <h1 className="text-center text-xl font-medium mb-8">
                Font File Downloader
            </h1>
            <div>
                <div className="grid w-full max-w-sm mx-auto items-center gap-1.5">
                    <Label htmlFor="font-css-file-link">
                        Font CSS File Link
                    </Label>
                    <Input
                        value={cssUrl}
                        onChange={(e) => setCssUrl(e.target.value)}
                        id="font-css-file-link"
                        placeholder="https:mepritam.dev/front.css"
                        type="text"
                        disabled={loading}
                    />
                    <Label htmlFor="font-src-prefix">Font src prefix</Label>
                    <Input
                        value={fontSrcPrefix}
                        onChange={(e) => setFontSrcPrefix(e.target.value)}
                        id="font-src-prefix"
                        placeholder="font/lato/"
                        type="text"
                        disabled={loading || cssUrl === ""}
                    />
                    <div className="flex justify-end">
                        <Button
                            className="mt-5"
                            disabled={
                                loading ||
                                (cssUrl === "" && fontSrcPrefix === "")
                            }
                            variant="link"
                            onClick={() => {
                                setCssUrl("");
                                setFontSrcPrefix("");
                            }}
                        >
                            Reset
                        </Button>
                    </div>
                    <Button
                        onClick={onClickProcessAndDownload}
                        disabled={cssUrl === "" || loading}
                        className="mt-5"
                    >
                        Process and Download
                    </Button>

                    {loading && <InfiniteLoaderIcon className=" mt-5" />}
                </div>
            </div>
        </section>
    );
};

export default FontFileDownloader;
