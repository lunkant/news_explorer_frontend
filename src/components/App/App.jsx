import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { signUp, signIn, getUser } from "../../utils/auth.js";
import { setToken, getToken, removeToken } from "../../utils/token.js";
import { savedArticle, removeSavedArticle } from "../../utils/api.js";
import { getNews } from "../../utils/newsApi.js";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import SuccessModal from "../SuccessModal/SuccessModal.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import Footer from "../Footer/Footer.jsx";
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(() => Boolean(getToken()));
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [savedArticles, setSavedArticles] = useState([]);

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

  const handleSavedArticleClick = (article) => {
    if (!isLoggedIn) return;

    const alreadySaved = savedArticles.find(
      (savedArticle) => savedArticle.link === article.link,
    );
    if (alreadySaved) {
      removeSavedArticle(alreadySaved._id)
        .then(() =>
          setSavedArticles((prev) =>
            prev.filter((item) => item._id !== alreadySaved._id),
          ),
        )
        .catch(console.error);
    } else {
      savedArticle(article)
        .then((newArticle) => setSavedArticles((prev) => [...prev, newArticle]))
        .catch(console.error);
    }
  };

  const handleRemoveSavedArticle = (article) => {
    removeSavedArticle(article._id)
      .then(() =>
        setSavedArticles((prev) =>
          prev.filter((item) => item._id !== article._id),
        ),
      )
      .catch(console.error);
  };

  const openLoginModal = () => {
    setActiveModal("login");
  };
  const openRegisterModal = () => {
    setActiveModal("register");
  };
  const closeModal = () => {
    setActiveModal("");
  };
  useEffect(() => {
    const token = getToken();
    if (!token) return;
    getUser(token)
      .then(({ data }) => {
        setCurrentUser(data);
        setIsLoggedIn(true);
      })
      .catch(() => {
        removeToken();
        setIsLoggedIn(false);
      });
  }, []);

  const handleLogin = (values) => {
    signIn(values)
      .then(({ token }) => {
        setToken(token);
        return getUser(token);
      })
      .then(({ data }) => {
        setCurrentUser(data);
        setIsLoggedIn(true);
        closeModal();
      })
      .catch(console.error);
  };

  const handleRegister = (values) => {
    signUp(values)
      .then(() => setActiveModal("success"))
      .catch(console.error);
  };

  const handleSignOut = () => {
    removeToken();
    setCurrentUser(null);
    setIsLoggedIn(false);
    setSavedArticles([]);
  };

  return (
    <div className="page">
      <Header
        isLoggedIn={isLoggedIn}
        userName={currentUser?.name}
        onSignInClick={openLoginModal}
        onSignOut={handleSignOut}
      />
      <LoginModal
        isOpen={activeModal === "login"}
        onClose={closeModal}
        onLogin={handleLogin}
        onSwitch={openRegisterModal}
      />

      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={closeModal}
        onRegister={handleRegister}
        onSwitch={openLoginModal}
      />
      <SuccessModal
        isOpen={activeModal === "success"}
        onClose={closeModal}
        onSignInClick={openLoginModal}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              onSearch={handleSearch}
              articles={results}
              isLoading={isLoading}
              hasSearched={hasSearched}
              searchError={searchError}
              savedArticles={savedArticles}
              onSavedArticleClick={handleSavedArticleClick}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/saved-news"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedNews
                userName={currentUser?.name}
                savedArticles={savedArticles}
                onRemoveClick={handleRemoveSavedArticle}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
