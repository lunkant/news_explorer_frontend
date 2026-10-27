import "./NewsCard.css";

function NewsCard({ card }) {
  const { title, text, date, source, link, image } = card;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <li className="news-card">
      <button
        className="news-card__save-button"
        type="button"
        aria-label="Save article"
      ></button>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="news-card__link"
      >
        <img src={image} alt={title} className="news-card__image" />
        <div className="news-card__content">
          <p className="news-card__date">{formattedDate}</p>
          <h3 className="news-card__title">{title}</h3>
          <p className="news-card__text">{text}</p>
          <p className="news-card__source">{source}</p>
        </div>
      </a>
    </li>
  );
}
export default NewsCard;
