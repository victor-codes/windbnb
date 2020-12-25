import React, { useRef, useEffect, useState } from "react";
import DiffLocation from "../Location/Location";
import { Search } from "../assets/icons/SearchButton";
import { CancelButton } from "../assets/icons/CancelButton";
import { IcreDecre } from "../assets/icons/IncreDecreButton";
import "./SearchBar.css";

export default function SearchBar(props) {
  const toggleShow = props.toggleShow;

  const [focus, setFocus] = useState(true);
  const locationRef = useRef(null);
  const guestRef = useRef(null);

  function handleSearch(e) {
    e.preventDefault();
    props.click(false);
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

  if (toggleShow) {
    className += "show";
  } else {
    className = "search__container";
  }

  const location = [
    { name: "Helsinki, Finland", id: "city-1", ref: locationRef },
    { name: "Turku, Finland", id: "city-2" },
    { name: "Oulu, Finland", id: "city-3" },
    { name: "Vaasa, Finland", id: "city-4" },
  ];

  const locationList = location.map((city) => (
    <DiffLocation
      name={city.name}
      setCountry={props.setCountry}
      id={city.id}
      key={city.id}
      handleFocus={city.ref}
      eHandleFocus={(val) => {
        setFocus(val);
      }}
    />
  ));

  useEffect(() => {
    if (focus) {
      locationRef.current.focus();
    } else {
      // guestRef.current.focus()
    }
  });

  return (
    <div className={className}>
      <div className="content">
        <div className="maxWidth">
          <div className="navbar">
            <h5>Edit your search</h5>
            <button aria-label="Close search modal" onClick={handleSearch}>
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
                // ref={(input) => input && input.focus()}
              />
            </div>
            <div className="filled__input input__two input__two1 fill__available">
              <label htmlFor="filter-by-number-of-guest" className="block">
                guests
              </label>
              <input
                id="filter-by-number-of-guest"
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
                // ref={guestRef}
              />
            </div>
            <button
              aria-label="Filter properties"
              className="submit"
              type="submit"
              onClick={filterSearch}
            >
              <Search fill="#F2F2F2" /> search
            </button>
          </form>
          <div className="option">
            {focus ? (
              <ul
                role="list"
                aria-labelledby="list-heading"
                className="location__filter"
              >
                {locationList}
              </ul>
            ) : (
              <ul className="guest__Filter visible">
                <div>
                  <h4>
                    Adults
                    <span>Ages 13 or above</span>
                  </h4>
                  <IcreDecre
                    countAdult={props.guestNumberAdult}
                    updateCount={(value) => props.setCountAdult(value)}
                    handleFocus={guestRef}
                  />
                </div>
                <div className="margin-top">
                  <h4>
                    Children
                    <span>Ages 2-12</span>
                  </h4>
                  <IcreDecre
                    countChildren={props.guestNumberChildren}
                    updateCountChildren={(value) =>
                      props.setCountChildren(value)
                    }
                  />
                </div>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
