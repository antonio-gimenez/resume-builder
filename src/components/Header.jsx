import React, { useContext } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { ReactComponent as Github } from "../assets/icons/github.svg";
import { ModalContext } from "../contexts/ModalContext";
const Header = () => {
  const { modals } = useContext(ModalContext);
  return (
    <header className="header">
      <div className="navbar container">
        <nav aria-label="Main navigation">
          <span className="navbar-branding">Resume builder</span>

          {JSON.stringify(modals)}

          <a
            className="link"
            aria-label="View repository on GitHub"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/antonio-gimenez/resume-generator"
          >
            <Github />
          </a>
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
