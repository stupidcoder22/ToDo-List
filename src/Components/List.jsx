import React from "react";
import "./List.css";

function List({ itemlist, deleteitem }) {
  return (
    <div>
      {itemlist.map((data) => {
        return (
          <div className="item" key={data.key}>
            <p>{data.item}</p>
            <button onClick={() => deleteitem(data.key)}>x</button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
