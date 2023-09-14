import React from "react";
import { Link } from "react-router-dom";
import Room from "./Room";


export default function HomePage(props) {
  return (
    <div className="homepage">
      
      <div className="createroom">
      <h2 className="text-white">Creat New Room</h2>
      <Link to="CreateRoom">
        <button type="button" class="btn btn-dark">+</button>
      </Link>
      </div>
      <div className="container">
        {props.roomArr.map((val, index) => {
          return (
            <Room
              key={index}
              room={val.room}
              roomName={val.roomName}
              roomColor={val.roomColor}
            />
          );
        })}
      </div>
      
    </div>
  );
}
