import React from "react";
import { useEffect } from "react";
import ColorSwitcher from "./ColorSwitcher";
import { ReactComponent as GitHubIcon } from "../assets/github.svg";
// @ts-check
function Header() {
  useEffect(() => {
    const mainContainer = document.querySelector(".scrollable-content");
    function fadeOnScroll() {
      const navbar = document.querySelector(".app-nav");
      const title = document.querySelector(".app-title");
      if (mainContainer.scrollTop > 0) {
        mainContainer.classList.add("scrolled");
        navbar.classList.add("fade");
        title.classList.add("fade");
      } else {
        mainContainer.classList.remove("scrolled");
        navbar.classList.remove("fade");
        title.classList.remove("fade");
      }
    }
    if (mainContainer.scrollTop > 0) {
      fadeOnScroll();
    }
    mainContainer.addEventListener("scroll", fadeOnScroll);
    return () => {
      mainContainer.removeEventListener("scroll", fadeOnScroll);
    };
  }, []);

  return (
    <nav role="navigation" className="app-nav print-hide">
      <h1 className="app-title">Resume builder</h1>
      <a
        role="button"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/antonio-gimenez/resume-generator"
      >
        <GitHubIcon className="github-icon" />
      </a>
      <ColorSwitcher />
    </nav>
  );
}

export default Header;
