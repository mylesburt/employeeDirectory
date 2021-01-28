import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Birthday:</strong> {props.birthday}
          </li>
          <li>
            <strong>Occupation:</strong> {props.email}
          </li>
          <li>
            <strong>Location:</strong> {props.phone}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
