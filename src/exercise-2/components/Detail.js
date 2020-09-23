import React from "react";
import products from "../mockups/data.json";

const Detail = props => {
  const id = props.match.params.id;
  let detail = {};
  Object.keys(products).forEach(name => {
    if (products[name].id === Number(id)) {
      detail = products[name];
    }
  });
  return (
    <div className="detail">
      <p>Products Details:</p>
      {Object.keys(detail).map((key, index) => (
        <p key={index}>{`${key} : ${detail[key]}`}</p>
      ))}
      <p>URL: {props.history.location.pathname}</p>
    </div>
  );
};

export default Detail;
