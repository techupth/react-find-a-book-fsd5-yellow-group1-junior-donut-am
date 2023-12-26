import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [listBook, setListBook] = useState([]);
  const [findBook, setFindBook] = useState("");

  useEffect(() => {
    findNameBooks();
  }, [findBook]);

  const findNameBooks = async() => {
    try {
      const result = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=" + findBook
      );
        setListBook(result.data.items);
      } catch (error) {
        setListBook([]);
    } 
  }
  return (
    <div className="App">
      <h1 className="findABook">Find a Book</h1>
      {status}
      <input
        type="text"
        value={findBook}
        onChange={(event) => {
          setFindBook(event.target.value);
        }}
      />
      <ul>
        {listBook.map((books, index) => {
          return <li key={index}>{books.volumeInfo.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
