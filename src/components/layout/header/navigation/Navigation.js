import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import styles from "./Navigation.module.scss";
import clsx from "classnames";
import { DarkModeContext } from "../../../../context/DarkModeContext";

const Navigation = () => {
  const navigationItems = [
    { label: "Home", link: "/" },
    { label: "Portfolio", link: "/portfolio" },
    { label: "Fun", link: "/fun" },
    { label: "About", link: "/about" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const darkMode = useContext(DarkModeContext);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickAway = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleClickAway);
    return () => document.removeEventListener("pointerdown", handleClickAway);
  }, [isOpen]);

  return (
    <nav ref={navRef}>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        <svg
          width="726"
          height="632"
          viewBox="0 0 726 632"
          fill={"none"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M726 632H0V539.333H726V632ZM726 362.333H0V269.667H726V362.333ZM726 0V92.667H0V0H726Z"
            fill={darkMode ? "white" : "black"}
          />
        </svg>
      </button>
      <ul
        className={clsx({
          [styles.open]: isOpen,
          [styles.dark]: darkMode,
        })}
      >
        {navigationItems.map(({ label, link }) => (
          <li key={link}>
            <NavLink
              to={link}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
