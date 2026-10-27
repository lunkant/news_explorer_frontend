import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");
  const handleChange = (evt) => {
    setKeyword(evt.target.value);
    setError("");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (keyword.trim() === "") {
      setError("Please enter a keyword");
      return;
    }
    onSearch(keyword.trim());
  };

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <input
        id="search-form-keyword"
        aria-label="Search topic"
        type="text"
        name="search"
        className="search-form__input"
        placeholder={error || "Enter topic"}
        value={keyword}
        onChange={handleChange}
      />
      <button type="submit" className="search-form__button">
        Search
      </button>
    </form>
  );
}
export default SearchForm;
