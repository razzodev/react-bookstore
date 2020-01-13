import React, { useEffect } from "react";
import SingleBook from "./SingleBook";
import EditBook from "./EditBook";

const ListHeader = props => {
  const { input } = props;
  let bookPath = JSON.stringify(input["id"]);
  useEffect(() => {
    return () => {};
  }, [input]);
  return (
    <tr style={{ fontWeight: "700" }}>
      <td>{input["Title"]}</td>
      <td>{input["Author"]}</td>
      <td>{input["Year Published"]}</td>
      <td>{input["Price"]}</td>
    </tr>
  );
};

export default ListHeader;
