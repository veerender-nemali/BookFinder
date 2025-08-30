import "./BookList.css";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="img-container">
        {book.cover_i && (
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            alt="book cover"
          />
        )}
        {!book.cover_i && <div className="img-card">image not available</div>}
      </div>

      <h3>{book.title}</h3>
      <p>{book.author_name}</p>
      <p>{book.first_publish_year}</p>
    </div>
  );
};

const BookList = ({ libraryData }) => {
  return (
    <div className="books">
      {libraryData.map((data, index) => (
        <BookCard book={data} key={index} />
      ))}
    </div>
  );
};

export default BookList;
