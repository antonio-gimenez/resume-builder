import React, { useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { ReactComponent as Github } from "../assets/icons/github.svg";
function Header() {
  useEffect(() => {
    const header = document.querySelector(".header");
    const handleScroll = () => {
      console.log(window.scrollY, window.scroll, window.pageYOffset);
      if (window.scroll > 0) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header ">
      <div className="navbar container">
        <nav aria-label={"Main navigation"}>
          <span className="navbar-branding">Resume builder</span>
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
}

export default Header;
