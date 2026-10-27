import NewsCard from "../NewsCard/NewsCard.jsx";
import "./NewsCardList.css";

function NewsCardList({ cards }) {
  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="news-card-list__cards">
        {cards.map((card) => (
          <NewsCard key={card.link} card={card} />
        ))}
      </ul>
      <button className="news-card-list__more-button" type="button">
        Show more
      </button>
    </section>
  );
}

export default NewsCardList;
