import React, { useEffect, useState } from "react";
import "./card.css";
import "./Showlist";
import Showlist from "./Showlist";

export default function Card({
  key,
  taskName,
  tasks,
  setTasks,
  id,
  setState,
  state,
  setTogglesubmit,
  ToggleSubmit,
  Editdata,
  singleData,
  setEditdata,
  setEditdataId,
}) {
  const OnEdit = (id) => {
    setTogglesubmit(true);
    console.log("updated Editdata", singleData);
    setState(singleData.taskName);
    setEditdataId(singleData.id);
  };

  const OnDelete = (key) => {
    // console.log("vidhi", tasks);
    // console.log("object", key);
    //id=user,s inputed data id
    //task.id=id of data in todo list

    const removeddata = tasks.filter((task) => task.id !== id);
    console.log("remove ", removeddata);
    setTasks(removeddata);
  };

  return (
    <>
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

          {taskName}
          <button type="button" className="edit" onClick={() => OnEdit(id)}>
            edit
          </button>

          <button type="button" className="delete" onClick={() => OnDelete(id)}>
            delete
          </button>
        </div>
      </div>
    </>
  );
}
