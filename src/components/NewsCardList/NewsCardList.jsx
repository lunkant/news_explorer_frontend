import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard.jsx";
import "./NewsCardList.css";

function NewsCardList({
  cards,
  isLoggedIn,
  savedArticles = [],
  onSaveClick,
  isSavedNewsPage = false,
  onRemoveClick,
}) {
  const [visibleCount, setVisibleCount] = useState(3);
  const shownCards = isSavedNewsPage ? cards : cards.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section className="news-card-list">
      {!isSavedNewsPage && (
        <h2 className="news-card-list__title">Search results</h2>
      )}
      <ul className="news-card-list__cards">
        {shownCards.map((card) => (
          <NewsCard
            key={card.link}
            card={card}
            isLoggedIn={isLoggedIn}
            isSaved={savedArticles.some((item) => item.link === card.link)}
            onSaveClick={onSaveClick}
            isSavedNewsPage={isSavedNewsPage}
            onRemoveClick={onRemoveClick}
          />
        ))}
      </ul>
      {!isSavedNewsPage && visibleCount < cards.length && (
        <button
          className="news-card-list__more-button"
          type="button"
          onClick={handleShowMore}
        >
          Show more
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
