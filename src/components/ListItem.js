import React, { useEffect, useState } from "react";
import EditBook from "./EditBook";
import { createPortal } from "react-dom";
import axios from "axios";

const ListItem = props => {
  const { book, update, formID } = props;
  const [edit, setedit] = useState(false);
  const [clickRemove, setClickRemove] = useState(false);
  const [deleteBook, setDeleteBook] = useState();
  const [title, settitle] = useState();
  const [author, setauthor] = useState();
  const [year, setyear] = useState();
  const [price, setprice] = useState();
  const element = document.getElementById("modal");

  const deleteBookFunc = () => {
    axios.post(`/book/delete?id=${book["id"]}`).then(() => update());
  };
  const editFunc = () => {
    setedit(false);
  };
  useEffect(() => {
    return () => {};
  }, [book]);

  return (
    <tr>
      {!edit && (
        <>
          <td>
            <a href={`/${book["id"]}`}>{book["title"]}</a>
          </td>
          <td>{book["author"]}</td>
          <td>{book["year"]}</td>
          <td>{book["price"]}</td>
          <td>
            <button onClick={() => setedit(true)}>edit</button>
          </td>
        </>
      )}
      {edit && (
        <>
          <td>
            <input
              type="text"
              name="title"
              form={formID}
              onChange={e => settitle(e.target.value)}
              placeholder={book["title"]}
            />
          </td>
          <td>
            <input
              type="text"
              name="author"
              form={formID}
              onChange={e => setauthor(e.target.value)}
              placeholder={book["author"]}
            />
          </td>
          <td>
            <input
              type="number"
              name="year"
              form={formID}
              onChange={e => setyear(e.target.value)}
              placeholder={book["year"]}
            />
          </td>
          <td>
            <input
              type="number"
              name="price"
              form={formID}
              onChange={e => setprice(e.target.value)}
              placeholder={book["price"]}
            />
          </td>
          <td>
            <input
              type="text"
              name="id"
              value={book["id"]}
              form={formID}
              style={{ display: "none" }}
            />
          </td>
          <td>
            <input
              type="submit"
              value="Update"
              form={formID}
              onClick={update}
            />
          </td>
        </>
      )}
      <td>
        <input
          type="button"
          value="remove"
          onClick={() => setClickRemove(true)}
        />
      </td>
      {clickRemove && (
        <>
          <td>
            <input
              type="text"
              onChange={e => setDeleteBook(e.target.value)}
              placeholder={`type book id (${book["id"]})`}
            />
          </td>
          <td>
            <button onClick={() => deleteBookFunc()}>delete forever</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default ListItem;
