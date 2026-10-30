import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard.jsx";
import "./NewsCardList.css";

function NewsCardList({ cards }) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="news-card-list__cards">
        {cards.slice(0, visibleCount).map((card) => (
          <NewsCard key={card.link} card={card} />
        ))}
      </ul>
      {visibleCount < cards.length && (
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
