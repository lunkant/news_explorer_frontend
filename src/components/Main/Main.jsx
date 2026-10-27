import SearchForm from "../SearchForm/SearchForm.jsx";
import NewsCardList from "../NewsCardList/NewsCardList.jsx";
import { sampleArticles } from "../../utils/constants.js";

import "./Main.css";

function Main() {
  return (
    <main className="main">
      <section className="main__hero">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm
          onSearch={(keyword) => console.log("Searching for:", keyword)}
        />
      </section>
      <NewsCardList cards={sampleArticles} />
    </main>
  );
}

export default Main;
