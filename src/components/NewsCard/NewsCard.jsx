import NewsCardList from "../NewsCardList/NewsCardList.jsx";

import "./NewsCard.css";
function NewsCard({
  card,
  isLoggedIn,
  isSaved,
  onSaveClick,
  isSavedNewsPage,
  onRemoveClick,
}) {
  const { title, text, date, source, link, image } = card;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleButtonClick = () => {
    if (isSavedNewsPage) {
      onRemoveClick(card);
    } else {
      onSaveClick(card);
    }
  };

  let buttonClassName = "news-card__button";
  if (isSavedNewsPage) {
    buttonClassName += " news-card__button_type_delete";
  } else {
    buttonClassName += " news-card__button_type_save";
    if (!isLoggedIn) buttonClassName += " news-card__button_inactive";
    if (isSaved) buttonClassName += " news-card__button_saved";
  }

  let tooltipText = "";
  if (isSavedNewsPage) tooltipText = "Remove from saved articles";
  else if (!isLoggedIn) tooltipText = "Sign in to save articles";

  return (
    <li className="news-card">
      {isSavedNewsPage && <p className="news-card__keyword">{card.keyword}</p>}
      <button
        className={buttonClassName}
        type="button"
        aria-label={isSavedNewsPage ? "Remove article" : "Save article"}
        onClick={handleButtonClick}
      ></button>
      {tooltipText && <span className="news-card__tooltip">{tooltipText}</span>}
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
