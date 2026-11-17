import githubIcon from "../../images/github.svg";
import linkedinIcon from "../../images/linkedin.svg";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2024 Mardochee, Powered by News API</p>
      <nav className="footer__nav">
        <ul className="footer__links">
          <li className="footer__item">
            <Link to="/" className="footer__link">
              Home
            </Link>
          </li>
          <li className="footer__item">
            <a
              href="https://tripleten.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              TripleTen
            </a>
          </li>
        </ul>
        <ul className="footer__social">
          <li className="footer__item">
            <a
              href="https://github.com/lunkant"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img className="footer__icon" src={githubIcon} alt="GitHub" />
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://www.linkedin.com/in/mardochee-ambroise-0a423b201/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img className="footer__icon" src={linkedinIcon} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
export default Footer;
