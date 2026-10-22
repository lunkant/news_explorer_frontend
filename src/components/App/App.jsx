import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
function App() {
  return (
    <div className="page">
      <Header
        isLoggedIn={true}
        onSignInClick={() => console.log("open login")}
        onSignOut={() => console.log("sign out")}
      />
      <Footer />
    </div>
  );
}

export default App;
