import React from "react";
import { Location } from "../assets/icons/location";

export default function DiffLocation(props) {
  return (
    <li
      id={props.id}
      key={props.id}
      onClick={() => props.setCountry(props.name)}

    >
      <button ref={props.handleFocus} >
        <Location />
        {props.name}
      </button>
    </li>
  );
}
