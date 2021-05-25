import React from "react";
import "./SearchBar.scss";
export default function SearchBar({ textTag, filters, clearFilter }) {
  const id = new Date().getMilliseconds();

  return (
    <header>
      <div className="search">
        <img src="/images/bg-header-desktop.svg" alt="hello" />
      </div>
      {textTag.length === 0 ? null : (
        <div className="filter_box">
          {textTag &&
            textTag.map((item) => (
              <div key={id}>
                <button className="filter_items">
                  {item}{" "}
                  <span className="delete" onClick={() => filters(item)}>
                    X
                  </span>
                </button>
              </div>
            ))}
          <div className="clear">
            <span className="clear" onClick={clearFilter}>
              Clear
            </span>{" "}
          </div>
        </div>
      )}
    </header>
  );
}
