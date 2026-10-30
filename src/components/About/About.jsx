import "./About.css";
import authorImage from "../../images/author_placeholder_image.svg";

function About() {
  return (
    <section className="about">
      <img className="about__author-image" src={authorImage} alt="Author" />
      <div className="about__info">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          I’m Mardochee, a software engineering student at TripleTen. I build
          full-stack web applications with JavaScript, React, Node.js and
          Express, along with HTML and CSS. Outside TripleTen, I study computer
          science on Codecademy, including Python, to strengthen my foundations
          in programming.
        </p>
        <p className="about__description"> stuff</p>
      </div>
    </section>
  );
}
export default About;
