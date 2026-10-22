import Navigation from "../Navigation/Navigation.jsx";
import { useLocation } from "react-router-dom";

import "./Header.css";

function Header({ isLoggedIn, onSignInClick, onSignOut }) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  return (
    <header className={`header ${isSavedNewsPage ? "header_theme_dark" : ""}`}>
      <p className="header__logo">NewsExplorer</p>
      <Navigation
        isLoggedIn={isLoggedIn}
        onSignInClick={onSignInClick}
        onSignOut={onSignOut}
      />
    </header>
  );
}

export default Header;
