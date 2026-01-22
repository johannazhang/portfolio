import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import styles from "./Navigation.module.scss";
import menu from "../../../../assets/icons/menu.png";

const Navigation = () => {
  const navigationItems = [
    { label: "Home", link: "/" },
    { label: "Portfolio", link: "/portfolio" },
    { label: "About", link: "/about" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

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
        <img src={menu} />
      </button>
      <ul className={`${isOpen && styles.open}`}>
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
