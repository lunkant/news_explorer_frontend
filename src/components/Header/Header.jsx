import { useState } from "react";
import Navigation from "../Navigation/Navigation.jsx";
import { useLocation } from "react-router-dom";

import "./Header.css";

function Header({ isLoggedIn, userName, onSignInClick, onSignOut }) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsOpen) => !prevIsOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  let headerClassName = "header";
  if (isSavedNewsPage) headerClassName += " header_theme_dark";
  if (isMenuOpen) headerClassName += " header_menu_opened";

  // Menu button look: X when open, black bars on the white header, white bars otherwise
  let menuButtonClassName = "header__menu-button";
  if (isMenuOpen) {
    menuButtonClassName += " header__menu-button_opened";
  } else if (isSavedNewsPage) {
    menuButtonClassName += " header__menu-button_theme_dark";
  }

  return (
    <header className={headerClassName}>
      <p className="header__logo">NewsExplorer</p>
      <Navigation
        isLoggedIn={isLoggedIn}
        userName={userName}
        onSignInClick={onSignInClick}
        onSignOut={onSignOut}
        isMenuOpen={isMenuOpen}
        onMenuClose={closeMenu}
      />
      {isMenuOpen && (
        <div className="header__overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
}

export default Header;
