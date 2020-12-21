import React from "react";
import "./Form.css";
import { Search } from "../assets/icons/SearchButton";

export default function Form(props) {
  function handleClick(e) {
    e.preventDefault();
    props.click(true);
  }

  return (
    <form action="">
      <div className="filled__input input__one">
        <label htmlFor="filter-by-location">location</label>
        <input
          id="filter-by-location"
          type="text"
          readOnly="readonly"
          value={props.countryName}
          className="location__input"
          onClick={handleClick}
        />
      </div>
      <div className="filled__input input__two">
        <label htmlFor="filter-by-guest">guests</label>
        <input
          type="text"
          readOnly="readonly"
          value={`${
            props.guestNumberAdult + props.guestNumberChildren >= 1
              ? props.guestNumberAdult + props.guestNumberChildren > 1
                ? `${props.guestNumberAdult + props.guestNumberChildren} guests`
                : `${props.guestNumberAdult + props.guestNumberChildren} guest`
              : "Add guest"
          }`}
          className="guest__input"
          onClick={handleClick}
        />
      </div>
      <button type="submit" onClick={handleClick}>
        <Search fill="#eb5757" />
      </button>
    </form>
  );
}
