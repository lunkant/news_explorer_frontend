import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import SuccessModal from "../SuccessModal/SuccessModal.jsx";
import Footer from "../Footer/Footer.jsx";
function App() {
  const [activeModal, setActiveModal] = useState("");

  const openLoginModal = () => {
    setActiveModal("login");
  };
  const openRegisterModal = () => {
    setActiveModal("register");
  };
  const closeModal = () => {
    setActiveModal("");
  };

  const handleLogin = (values) => {
    console.log("login:", values);
    closeModal();
  };

  const handleRegister = (values) => {
    console.log("register:", values);
    setActiveModal("success");
  };

  return (
    <div className="page">
      <Header
        isLoggedIn={false}
        onSignInClick={openLoginModal}
        onSignOut={() => console.log("sign out")}
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
        <Route path="/" element={<Main />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
