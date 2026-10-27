import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import Footer from "../Footer/Footer.jsx";
function App() {
  return (
    <div className="page">
      <Header
        isLoggedIn={true}
        onSignInClick={() => console.log("open login")}
        onSignOut={() => console.log("sign out")}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
