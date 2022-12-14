import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <span className="navbar-branding">Resume builder</span>
        <a
          aria-label="View repository on GitHub"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/antonio-gimenez/resume-generator"
        >
          View on GitHub
        </a>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default Header;
