import React from "react";
import Comics from "./Comics";
import LikeButton from "./LikeButton";
import Pet from "./Pet";

export default function Card({ name, description, thumbnail, comics }) {
  return (
    <div className="col-12 border-top p-5">
      <div className="row">
        <div className="col-md-6">
          <h2>{name}</h2>
          <p>{description}</p>
          <Comics comics={comics?.items} />
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid"
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={name}
          />
          <LikeButton name={name} />
          <Pet />
        </div>
      </div>
    </div>
  );
}
