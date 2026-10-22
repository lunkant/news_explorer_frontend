import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";
import logoutBtnWht from "../../images/logout_button_white.svg";
import logoutBtnBlk from "../../images/logout_button_black.svg";

function Navigation({ isLoggedIn, onSignInClick, onSignOut }) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";
  const logoutButtonIcon = isSavedNewsPage ? logoutBtnBlk : logoutBtnWht;
  return (
    <nav className="navigation">
      <ul className="navigation__links">
        <li className="navigation__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link_active" : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className="navigation__item">
            <NavLink
              to="/saved-news"
              className={({ isActive }) =>
                `navigation__link ${isActive ? "navigation__link_active" : ""}`
              }
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
          onClick={onSignOut}
        >
          Placeholder Name
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
          onClick={onSignInClick}
        >
          Sign in
        </button>
      )}
    </nav>
  );
}
export default Navigation;
