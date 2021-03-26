import React from "react";
import "./SearchBar.scss";
export default function SearchBar({ info }) {
  console.log(info);
  return (
    <header>
      <div className="search">
        <img src="/images/bg-header-desktop.svg" alt="hello" />
      </div>
      <div className="filter_box">
        {info &&
          info.map((item) => (
            <>
              <div key={item.id}>
                <button className="filter_items">
                  {item} <span className="delete">X</span>
                </button>
              </div>
            </>
          ))}
      </div>
    </header>
  );
}
