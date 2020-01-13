import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const EditBook = props => {
  const element = document.getElementById("modal");
  const { data } = props;
  return (
    <>
      {createPortal(
        <form>
          <input placeholder={data["title"]} />
          <input placeholder={data["author"]} />
          <input placeholder={data["year published"]} />
          <input placeholder={data["price"]} />
          <label>{data["id"]}</label>
          <button type="submit" value="submit">
            Edit
          </button>
        </form>,
        element
      )}
      ;
    </>
  );
};

export default EditBook;
