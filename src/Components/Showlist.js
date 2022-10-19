import React, { useState } from "react";
import "./Showlist.css";
import "./Card.js";
import "./card.css";
import Card from "./Card.js";

export default function Showlist() {
  //sreen holding that user passes on screen if we call state ={state}
  const [state, setState] = useState("");
  const [tasks, setTasks] = useState([]);
  // const getIn = tasks.indexOf();

  //make a array of obj in which user's input store

  function Addtask(e) {
    if (!state) {
    } else {
      //task[{}]=user's prevous input + new  one
      setTasks((prev) => [
        ...prev,
        { id: Math.floor(100000 + Math.random() * 900000), taskName: state },
      ]);
      console.log("storing data  in array ",tasks);
      // console.log("text", getIn);
    }
    setState(" ");
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
          value={state}
          placeholder=" write tasks"
          className="task"
          onChange={(e) => onInputChange(e)}
        />

        <button type="button" className="btn btn-primary " onClick={Addtask}>
          ADD
        </button>
      </div>

      {tasks.map((el, id) => {
        return (
          <Card
            data={tasks}
            key={id}
            id={id} 
            setTasks={setTasks}
            taskName={el.taskName}
            tasks={tasks}
            // getIn={getIn}
          />
        );
      })}
    </div>
  );
}
//
