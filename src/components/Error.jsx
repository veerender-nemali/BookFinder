import React from "react";

const Error = ({ errorMessage }) => {
  return (
    <div>
      //we can make this error page more meaningful
      <h1>{errorMessage}</h1>
    </div>
  );
};

export default Error;
