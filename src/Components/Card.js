import React, { useEffect, useState } from "react";
import "./card.css";
import "./Showlist";
import Showlist from "./Showlist";

export default function Card({ key, taskName, tasks, setTasks, data }) {
  console.log(data);
  const OnDelete = (key) => {
    console.log();
    console.log("vidhi", tasks);
    console.log("object", key);
    const removeddata = tasks.filter((tasks) => tasks.taskName.key !== key);
    console.log("remove ", removeddata);
    setTasks(removeddata);
  };


  
  return (
    <>
      {data.map((item) => (
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>

            {item?.taskName}
            <button type="button" className="edit">
              edit
            </button>

            <button
              type="button"
              className="delete"
              onClick={() => OnDelete(item?.key)}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
