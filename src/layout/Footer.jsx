function Footer() {
  return (
    <footer className="page-footer blue lighten-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright UrbanSDK
        </div>
      </div>
    </footer>
  );
}

export { Footer };
