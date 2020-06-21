import React from "react";

import "./spincard.scss";

export default function SpinCard({
  title = "",
  linkTitle,
  listItems = [],
  boxItems = [],
  renderListItemFunc = (item, index) => <div key={index}>{item}</div>,
  renderBoxItemsFunc = (item, index) => <div key={index}>{item}</div>,
}) {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <h1>{title}</h1>

        <ul className="card__details">
          {listItems.map((item, index) => {
            return <li key={`${index}`}>{renderListItemFunc(item)}</li>;
          })}
        </ul>
      </div>
      <div className="card__side card__side--back card__side--back-1">
        <div className="card__cta">
          <div className="card__price-box">
            {boxItems.map((item, index) => renderBoxItemsFunc(item, index))}
          </div>
          <a href="#popup" className="btn btn--white">
            {linkTitle}
          </a>
        </div>
      </div>
    </div>
  );
}
