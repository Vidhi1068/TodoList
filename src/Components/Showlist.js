import React, { useState } from "react";
import "./Showlist.css";
import "./Card.js";
import "./card.css";
import Card from "./Card.js";

export default function Showlist() {
  //sreen holding that user passes on screen if we call state ={state}
  const [state, setState] = useState("");
  const [tasks, setTasks] = useState([]);
  //make a array of obj in which user's input store

  function Addtask(e) {
    if (!state) {
    } else {
      //task[{}]=user's prevous input + new  one
      setTasks((prev) => [...prev, { taskName: state }]);
      console.log(tasks);
      setState(" ");
    }
  }

  const onInputChange = (e) => {
    //when user start to type store it to e.target
    setState(e.target.value);
  };

  return (
    <div className="container">
      <h1>TO-DO List</h1>

      <div className="taskbtn">
        <input
          placeholder="write write tasks"
          className="task"
          onChange={(e) => onInputChange(e)}
        ></input>

        <button type="button" className="btn btn-primary " onClick={Addtask}>
          ADD
        </button>
      </div>

      {tasks.map((el) => {
        return <Card taskName={el.taskName} OnDelete={OnDelete}/>;
      })}
    </div>
  );
}
