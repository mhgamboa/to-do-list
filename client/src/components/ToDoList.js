import React from "react";

const List = ({ list }) => {
  return (
    <div className="">
      {list.map(item => {
        return (
          <h1 key={item._id} className="bg-light border p-3">
            {item.name}
          </h1>
        );
      })}
    </div>
  );
};

export default List;
