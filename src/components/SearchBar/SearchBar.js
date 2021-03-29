import React from "react";
import "./SearchBar.scss";
export default function SearchBar({ textTag, filters }) {
  const id = new Date().getMilliseconds();

  console.log("textTag", textTag);
  return (
    <header>
      <div className="search">
        <img src="/images/bg-header-desktop.svg" alt="hello" />
      </div>
      {textTag.length === 0 ? null : (
        <div className="filter_box">
          {textTag &&
            textTag.map((item) => (
              <div>
                <div key={id}>
                  <button className="filter_items">
                    {item}{" "}
                    <span className="delete" onClick={() => filters(item)}>
                      X
                    </span>
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </header>
  );
}
