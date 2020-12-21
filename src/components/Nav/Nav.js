import React from "react";
import Form from "../Form/Form";
import "./Nav.css";

export default function Nav(props) {
  return (
    <header>
      <nav>
        <div>
          <h1>
            <a href="/">
              <img src="media/logo.png" alt="Windbnb logo" />
            </a>
          </h1>
        </div>
        <Form
          countryName={props.countryName}
          guestNumberAdult={props.guestNumberAdult}
          guestNumberChildren={props.guestNumberChildren}
          click={props.click}
        />
      </nav>
    </header>
  );
}
