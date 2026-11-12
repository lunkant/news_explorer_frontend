import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader.jsx";
import { NewsCardList } from "../NewsCardList/NewsCardList.jsx";
import "./SavedNews.css";

function SavedNews({ userName, savedArticles, onRemoveClick }) {
  return (
    <main className="saved-news">
      <SavedNewsHeader userName={userName} savedArticles={savedArticles} />

      {savedArticles.length > 0 && (
        <NewsCardList
          cards={savedArticles}
          isSavedNewsPage={true}
          onRemoveClick={onRemoveClick}
        />
      )}
    </main>
  );
}
export default SavedNews;
