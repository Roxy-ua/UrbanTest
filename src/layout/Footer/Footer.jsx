import './Footer.css';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        © {new Date().getFullYear()} Copyright UrbanSDK
      </div>
    </footer>
  );
};

export default Footer;
