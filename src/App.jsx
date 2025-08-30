import { useEffect, useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import ShimmerUI from "./components/ShimmerUI";
import Error from "./components/Error";
import fetchData from "./utils/fetchData";
import SearchBar from "./components/SearchBar";

function App() {
  const [libraryData, setLibraryData] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [inputData, setInputData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [initialMessage, setInitialMessage] = useState(true);
  const [status, setStatus] = useState({
    loading: false,
    invalidInput: false,
    error: false,
  });

  useEffect(() => {
    if (inputData === "") return;

    fetchData(
      inputData,
      setStatus,
      setLibraryData,
      setErrorMessage,
      setInitialMessage
    );
  }, [inputData]);

  const { loading, invalidInput, error } = status;

  return (
    <div className="app-container">
      <nav>
        <SearchBar
          userInput={userInput}
          setLibraryData={setLibraryData}
          setInputData={setInputData}
          setUserInput={setUserInput}
          inputData={inputData}
        />
      </nav>

      <div className="container">
        {initialMessage && (
          <h2 className="custom-message">
            Start searching for your favourite Book!!
          </h2>
        )}

        {invalidInput && (
          <h2 className="custom-message">Please enter a valid Book Name!!</h2>
        )}

        {loading && <ShimmerUI />}

        {error && <Error errorMessage={errorMessage} />}

        {libraryData.length > 0 && <BookList libraryData={libraryData} />}
      </div>
    </div>
  );
}

export default App;
