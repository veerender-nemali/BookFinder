import "./ShimmerUI.css";

const ShimmerUI = () => {
  return (
    <div className="books">
      {Array(12)
        .fill("")
        .map(() => (
          <div className="card">
            <div className="img-container">
              <div className="img-card"></div>
            </div>
            <h3 className="title"></h3>
            <p className="author"></p>
            <p className="publish-date"></p>
          </div>
        ))}
    </div>
  );
};

export default ShimmerUI;
