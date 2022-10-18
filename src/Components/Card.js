import React, { useEffect, useState } from "react";
import "./card.css";
import "./Showlist";
import Showlist from "./Showlist";

export default function Card(props ,{OnDelete}) {
  console.log(props);

 const OnDelete =() =>{
  
 }

  return (
    <div>
      <div className="card" id="ca">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>

        {props?.taskName}
      </div>
      <button type="button" className="btn btn-warning">
        edit
      </button>
      <button type="button" className="btn btn-danger"  onClick={OnDelete}>
        delete
      </button>
    </div>
  );
}
