import "./SavedNewsHeader.css";

function SavedNewsHeader({ userName, savedArticles }) {
  const keywordCounts = savedArticles.reduce((accumulator, article) => {
    accumulator[article.keyword] = (accumulator[article.keyword] || 0) + 1;
    return accumulator;
  }, {});

  const sortedKeywords = Object.keys(keywordCounts).sort(
    (a, b) => keywordCounts[b] - keywordCounts[a],
  );

  const keywordText =
    sortedKeywords.length <= 3
      ? sortedKeywords.join(", ")
      : `${sortedKeywords.slice(0, 2).join(", ")}, and ${sortedKeywords.length - 2} others`;

  const word = savedArticles.length === 1 ? "article" : "articles";

  return (
    <section className="saved-news-header">
      <p className="saved-news-header__label">Saved articles</p>
      <h1 className="saved-news-header__title">
        {userName}, you have {savedArticles.length} saved {word}
      </h1>

      {sortedKeywords.length > 0 && (
        <p className="saved-news-header__keywords">
          By keywords:{" "}
          <span className="saved-news-header__keywords-list">
            {keywordText}
          </span>
        </p>
      )}
    </section>
  );
}
export default SavedNewsHeader;
