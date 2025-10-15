import React from "react";
import AuthContext from "./AuthContext";

function MyList() {
  const username = React.useContext(AuthContext);
  const data = [1, 2, 3, 4, 5];

  return (
    <>
      <ul>
        {
          data.map((element, index) =>
            <li key={index}>List Item : {element}</li>
          )
        }
      </ul>
      <p>안녕히 가세요, {username}</p>
    </>
  );
}

export default MyList