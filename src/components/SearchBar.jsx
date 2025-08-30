import "./SearchBar.css";

const SearchBar = ({
  userInput,
  setLibraryData,
  setInputData,
  setUserInput,
  inputData,
}) => {
  const submitHandler = () => {
    if (userInput === "" || userInput === inputData) return;

    setLibraryData([]);
    setInputData(userInput);
  };
  return (
    <div className="search-box">
      <input
        type="text"
        value={userInput}
        placeholder="Search by book or author"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <button onClick={submitHandler}>search</button>
    </div>
  );
};

export default SearchBar;
