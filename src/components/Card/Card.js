import React from "react";
import { Star } from "../assets/icons/StarButton";
import "./Card.css";

export default function Card(props) {
  let beds;
  if (props.beds) {
    beds = props.beds > 1 ? `. ${props.beds} beds` : ` . ${props.beds} bed`;
  }
  const noSuperHost = (
    <div>
      <img src={props.photoUrl} alt={props.title} />
      <div className="card__info super__host__spacing">
        <div className="suite ">
          <p className="apartment__type">
            {props.type} {beds}{" "}
          </p>
        </div>
        <div className="rating">
          <Star fill="#EB5757" />
          <p className="rate-value">{props.rating}</p>
        </div>
      </div>
      <h3 className="marginTop">{props.title}</h3>
    </div>
  );
  const superHost = (
    <div>
      <img src={props.photoUrl} alt={props.title} />
      <div className="card__info">
        <div className="suite">
          <div className="super__host">
            <p>Super host</p>
          </div>
          <p className="apartment__type">
            {props.type} {beds}{" "}
          </p>
        </div>
        <div className="rating">
          <Star fill="#EB5757" />
          <p className="rate-value">{props.rating}</p>
        </div>
      </div>
      <h3>{props.title}</h3>
    </div>
  );
  return (
    <div className="card">{props.superHost ? superHost : noSuperHost}</div>
  );
}
