import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";
import logoutBtnWht from "../../images/logout_button_white.svg";
import logoutBtnBlk from "../../images/logout_button_black.svg";

function Navigation({
  isLoggedIn,
  userName,
  onSignInClick,
  onSignOut,
  isMenuOpen,
  onMenuClose,
}) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";
  const logoutButtonIcon =
    isSavedNewsPage && !isMenuOpen ? logoutBtnBlk : logoutBtnWht;

  const handleSignInClick = () => {
    onMenuClose();
    onSignInClick();
  };

  const handleSignOutClick = () => {
    onMenuClose();
    onSignOut();
  };

  const getLinkClassName = ({ isActive }) =>
    `navigation__link ${isActive ? "navigation__link_active" : ""}`;

  return (
    <nav className={`navigation ${isMenuOpen ? "navigation_opened" : ""}`}>
      <ul className="navigation__links">
        <li className="navigation__item">
          <NavLink to="/" className={getLinkClassName} onClick={onMenuClose}>
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className="navigation__item">
            <NavLink
              to="/saved-news"
              className={getLinkClassName}
              onClick={onMenuClose}
            >
              Saved articles
            </NavLink>
          </li>
        )}
      </ul>

      {isLoggedIn ? (
        <button
          type="button"
          className="navigation__button navigation__button_logout"
          onClick={handleSignOutClick}
        >
          {userName}
          <img
            src={logoutButtonIcon}
            alt=""
            className="navigation__logout-icon"
          />
        </button>
      ) : (
        <button
          type="button"
          className="navigation__button"
          onClick={handleSignInClick}
        >
          Sign in
        </button>
      )}
    </nav>
  );
}
export default Navigation;
