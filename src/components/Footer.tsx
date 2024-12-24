const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-3">
      <div className="flex justify-between text-center flex-wrap container px-4 mx-auto">
        <div className="mb-3">Date: {new Date().toLocaleDateString()}</div>
        <div className="mb-3">
          Design and Developed by{' '}
          <a href="https://mepritam.dev" className="text-teal-500" target="_blank" rel="noreferrer">
            meghoshpritam
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
