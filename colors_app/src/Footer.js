import React from "react";

const Footer = ({paletteName, emoji}) => (
  <footer className="palette-footer">
    {paletteName}
    <span className="emoji">{emoji}</span>
  </footer>
);

export default Footer;
