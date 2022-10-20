import React, { useState } from "react";
import "./Showlist.css";
import "./Card.js";
import "./card.css";
import Card from "./Card.js";

export default function Showlist() {
  //sreen holding that user passes on screen if we call state ={state}
  //make a array of obj in which user's input store

  const [state, setState] = useState("");
  const [tasks, setTasks] = useState([]);
  const [ToggleSubmit, setTogglesubmit] = useState(false);
  const [Editdata, setEditdata] = useState(null);
  const [editebaleDataId, setEditdataId] = useState(null);

  function Addtask(e) {
    if (!state) {
      alert("plz enter the data");
    } else if (state && ToggleSubmit) {
      setTasks(
        tasks.map((elem) => {
          if (elem.id === Editdata) {
            return { ...elem, taskName: state };
          }
          return elem;
        })
      );

      setState("");
      setEditdata(null);
    } else {
      //task[{}]=user's prevous input + id of data +new  data
      setTasks((prev) => [
        ...prev,
        { id: Math.floor(100000 + Math.random() * 900000), taskName: state },
      ]);
      console.log("storing data  in array ", tasks);
    }
    setState(" ");
  }

  const onInputChange = (e) => {
    //when user start to type store it to e.target
    setState(e.target.value);
  };

  const updateTask = () => {
    console.log("updateTask");

    setTasks((prev) =>
      prev.map((el) =>
        el.id === editebaleDataId
          ? { id: editebaleDataId, taskName: state }
          : el
      )
    );
    setTogglesubmit(false);
    setState(" ");
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
        {!ToggleSubmit ? (
          <button type="button" className="btn btn-primary " onClick={Addtask}>
            ADD
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary "
            onClick={updateTask}
          >
            UPDATE
          </button>
        )}
      </div>

      {tasks.map((el) => {
        return (
          <Card
            key={el.id}
            setTasks={setTasks}
            taskName={el.taskName}
            tasks={tasks}
            id={el.id}
            singleData={el}
            state={state}
            setState={setState}
            ToggleSubmit={ToggleSubmit}
            setTogglesubmit={setTogglesubmit}
            Editdata={Editdata}
            setEditdata={setEditdata}
            setEditdataId={setEditdataId}
          />
        );
      })}
    </div>
  );
}
