import React from "react";

export const IcreDecre = (props) => (
  <div className="button">
    <div
      onClick={() => {
        props.updateCount
          ? props.updateCount(props.countAdult - 1)
          : props.updateCountChildren(props.countChildren - 1);
      }}
      className="minus"
      onFocus={props.click}
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <span className="guest__total">
      {props.countAdult} {props.countChildren}
    </span>
    <div
      onClick={() => {
        props.updateCount
          ? props.updateCount(props.countAdult + 1)
          : props.updateCountChildren(props.countChildren + 1);
      }}
      className="plus"
      onFocus={props.click}
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
);
