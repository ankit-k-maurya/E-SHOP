import React from "react";

const navbar = (prop) => {
  const filterItem = prop.filterItem;
  const menuList = prop.menuList;
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => (
            // return (
            <button
              className="btn-group__item"
              onClick={() => filterItem(curElem)}
            >
              {curElem}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default navbar;
