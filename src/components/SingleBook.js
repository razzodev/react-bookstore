import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import books from "../server.py";
const SingleBook = props => {
  const { bookID } = useParams();
  const [content, setcontent] = useState(false);

  useEffect(() => {
    fetch(`./book?id=${bookID}`).then(res =>
      res.json().then(data => setcontent(data))
    );
    return () => {};
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        "{content["title"]}" ({content["year"]})
      </h2>
      <span style={{ fontWeight: "600", marginRight: "30px" }}>
        by {content["author"]}
      </span>
      <span>{content["price"]}$</span>
      <br />
      <br />
      <a href="/catalog">back</a>
    </div>
  );
};

export default SingleBook;
