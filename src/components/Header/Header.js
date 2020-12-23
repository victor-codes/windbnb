import React from "react";
import "../Main.css";

export default function Header(props) {
  return (
    <div className="hero">
      <h2>Stays in Finland</h2>
      <p>{props.numberOfProperty}</p>
    </div>
  );
}
