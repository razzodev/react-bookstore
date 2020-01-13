import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import ListHeader from "./ListHeader";

const tableHeading = {
  Title: "Title",
  Author: "Author",
  "Year Published": "Year Published",
  Price: "Price"
};

const Catalog = () => {
  const [books, setBooks] = useState([]);
  const [update, setupdate] = useState(false);

  const updateComp = () => {
    setupdate(true);
  };
  useEffect(() => {
    fetch("/all_books").then(res => res.json().then(books => setBooks(books)));
    return () => {};
  }, [update]);
  return (
    <div>
      <h2>Catalog</h2>
      <form action="/update_book" id="update-cat" method="POST">
        <table>
          <ListHeader input={tableHeading} />
          {books &&
            books.map(bookID => (
              <ListItem book={bookID} formID="update-cat" update={updateComp} />
            ))}
        </table>
      </form>
    </div>
  );
};

export default Catalog;
