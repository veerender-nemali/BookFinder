const fetchData = async (
  inputData,
  setStatus,
  setLibraryData,
  setErrorMessage,
  setInitialMessage
) => {
  setStatus({
    loading: true,
    invalidInput: false,
    error: false,
  });
  setErrorMessage("");
  setInitialMessage(false);

  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${inputData}`
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const json = await response.json();
    const books = json?.docs || [];

    setLibraryData(books);
    setStatus({
      loading: false,
      error: false,
      invalidInput: books.length === 0,
    });
  } catch (error) {
    // console.log("Error : " + error.message);//I am not setting error message for now
    setErrorMessage(error.message || "Something went wrong.");
    setStatus({ loading: false, error: true, invalidInput: false });
  }
};

export default fetchData;
