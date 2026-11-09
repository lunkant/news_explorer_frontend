import { useState } from "react";
import { getNews } from "../../utils/newsApi.js";
import SearchForm from "../SearchForm/SearchForm.jsx";
import NewsCardList from "../NewsCardList/NewsCardList.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import NothingFound from "../NothingFound/NothingFound.jsx";
import About from "../About/About.jsx";

import "./Main.css";

function Main() {
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [searchError, setSearchError] = useState("");

  const handleSearch = (keyword) => {
    setIsLoading(true);
    setHasSearched(true);
    setSearchError("");

    getNews(keyword)
      .then((articles) => setResults(articles))
      .catch((err) => {
        console.error(err);
        setResults([]);
        setSearchError(
          "Sorry, something went wrong during the request. Please try again later.",
        );
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <main className="main">
      <section className="main__hero">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm onSearch={handleSearch} />
      </section>
      {hasSearched && isLoading && <Preloader />}
      {hasSearched && !isLoading && searchError && (
        <p className="main__error">{searchError}</p>
      )}
      {hasSearched && !isLoading && !searchError && results.length === 0 && (
        <NothingFound />
      )}
      {hasSearched && !isLoading && results.length > 0 && (
        <NewsCardList cards={results} />
      )}
      <About />
    </main>
  );
}

export default Main;
