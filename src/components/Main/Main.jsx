import SearchForm from "../SearchForm/SearchForm.jsx";
import NewsCardList from "../NewsCardList/NewsCardList.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import NothingFound from "../NothingFound/NothingFound.jsx";
import About from "../About/About.jsx";

import "./Main.css";

function Main({
  onSearch,
  articles,
  isLoading,
  hasSearched,
  searchError,
  savedArticles,
  onSavedArticleClick,
  isLoggedIn,
}) {
  return (
    <main className="main">
      <section className="main__hero">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm onSearch={onSearch} />
      </section>
      {hasSearched && isLoading && <Preloader />}
      {hasSearched && !isLoading && searchError && (
        <p className="main__error">{searchError}</p>
      )}
      {hasSearched && !isLoading && !searchError && articles.length === 0 && (
        <NothingFound />
      )}
      {hasSearched && !isLoading && articles.length > 0 && (
        <NewsCardList
          cards={articles}
          isLoggedIn={isLoggedIn}
          savedArticles={savedArticles}
          onSaveClick={onSavedArticleClick}
        />
      )}
      <About />
    </main>
  );
}

export default Main;
