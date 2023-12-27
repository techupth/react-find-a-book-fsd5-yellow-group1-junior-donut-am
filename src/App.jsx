import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const bookSearch = async () => {
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=/${searchInput}`
    );
    setSearchResults(result.data.items);
    console.log(result);
  };

  useEffect(() => {
    bookSearch();
  }, [searchInput]);

  return (
    <div className="App">
      <p>Find a Book</p>
      <input
        type="text"
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
        value={searchInput}
      />
      <div>
        <ul>
          {searchResults.map((list, index) => {
            return <li key={index}>{list.volumeInfo.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
