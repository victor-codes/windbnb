import React, { useRef, useEffect, useState } from "react";
import { Search } from "../assets/icons/SearchButton";
import { Location } from "../assets/icons/location";
import { CancelButton } from "../assets/icons/CancelButton";
import { IcreDecre } from "../assets/icons/IncreDecreButton";
import "./SearchBar.css";

export default function SearchBar(props) {
  const toggleShow = props.toggleShow;

  const [focus, setFocus] = useState(true);
  const locationRef = useRef(null);
  // const guestRef = useRef(null);

  function handleSearch(e) {
    e.preventDefault();
    // props.click(false);
  }
  function filterSearch(e) {
    e.preventDefault();
    props.click(false);
    props.handleGuestNumberChange(
      props.guestNumberAdult + props.guestNumberChildren
    );
    props.change(props.countryName.split(",")[0]);
  }

  let className = "";
  // let locationClassName = "";
  // let guestClassName = "";

  if (toggleShow) {
    className += "show";
  } else {
    className = "search__container";
  }

  // if (focus) {
  //   locationClassName = "location__filter";
  //   guestClassName = "guest__Filter";
  // } else {
  //   guestClassName = "guest__Filter visible";.
  //   locationClassName = "location__filter hidden";
  // }

  const location = [
    "Helsinki, Finland",
    "Turku, Finland",
    "Oulu, Finland",
    "Vaasa, Finland",
  ];

  const locationList = location.map((value) => (
    <li onClick={() => props.setCountry(value)} ref={locationRef}>
      <Location />
      {value}
    </li>
  ));

  // useEffect(() => {
  //   if (focus) {
  //     locationRef.current.focus()
  //   } else {
  //     locationRef.current.focus()
  //   }
  // }, [focus])

  return (
    <div className={className}>
      <div className="content">
        <div className="maxWidth">
          <div className="navbar">
            <h5>Edit your search</h5>{" "}
            <button onClick={handleSearch}>
              <CancelButton />
            </button>
          </div>
          <form action="" className="form__modal">
            <div className="filled__input input__one input__one1 fill__available">
              <label htmlFor="filter-by-location" className="block">
                location
              </label>
              <input
                tabIndex="0"
                id="filter-by-location"
                type="text"
                value={props.countryName}
                readOnly="readonly"
                className="location__input location"
                onClick={() => setFocus(true)}
                onFocus={() => setFocus(true)}
                ref={locationRef}
                // ref={(input) => input && input.focus()}
              />
            </div>
            <div className="filled__input input__two input__two1 fill__available">
              <label htmlFor="filter-by-guest" className="block">
                guests
              </label>
              <input
                type="text"
                readOnly="readonly"
                value={`${
                  props.guestNumberAdult + props.guestNumberChildren >= 1
                    ? props.guestNumberAdult + props.guestNumberChildren > 1
                      ? `${
                          props.guestNumberAdult + props.guestNumberChildren
                        } guests`
                      : `${
                          props.guestNumberAdult + props.guestNumberChildren
                        } guest`
                    : "Add guest"
                }`}
                className="guest__input guest"
                onClick={() => setFocus(false)}
                onFocus={() => setFocus(false)}
              />
            </div>
            <button className="submit" type="submit" onClick={filterSearch}>
              <Search fill="#F2F2F2" /> search
            </button>
          </form>
          <div className="option">
            {focus ? <ul className="location__filter">{locationList}</ul> : <ul className="guest__Filter visible">
              <div>
                <h4>
                  Adults
                  <span>Ages 13 or above</span>
                </h4>
                <IcreDecre
                  countAdult={props.guestNumberAdult}
                  updateCount={(value) => props.setCountAdult(value)}
                />
              </div>
              <div className="margin-top">
                <h4>
                  Children
                  <span>Ages 2-12</span>
                </h4>
                <IcreDecre
                  countChildren={props.guestNumberChildren}
                  updateCountChildren={(value) => props.setCountChildren(value)}
                />
              </div>
            </ul>}
            {/* <ul className={locationClassName}>{locationList}</ul> */}
            {/* <ul className={guestClassName}>
              <div>
                <h4>
                  Adults
                  <span>Ages 13 or above</span>
                </h4>
                <IcreDecre
                  count={props.guestNumberAdult}
                  updateCount={(value) => props.setCountAdult(value)}
                />
              </div>
              <div className="margin-top">
                <h4>
                  Children
                  <span>Ages 2-12</span>
                </h4>
                <IcreDecre
                  countChildren={props.guestNumberChildren}
                  updateCountChildren={(value) => props.setCountChildren(value)}
                />
              </div>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
