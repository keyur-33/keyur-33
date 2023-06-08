

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const tasklist = [
  {
    title: "Humber",

    tasks: ["Task 1", "Task 2", "Task 3"],

    id: 1,
  },

  {
    title: "MERN",

    tasks: ["Lab", "Project", "Quiz"],

    id: 2,
  },

  {
    title: "Java",

    tasks: ["Group Discussion", "Exam", "Assignment"],

    id: 3,
  },
];

const Task = (data) => {
  var total = 0;
  tasklist.forEach((data) => {
    return (total += data.tasks.length);
  });
  return (
    <header>
      <h1>Number of Task: {total}</h1>
    </header>
  );
};

const Humber = (data) => {
  var title;
  var task;
  tasklist.forEach((data) => {
    if (data.title == "Humber") {
      title = data.title;
      task = data.tasks;
    }
  });
  return (
    <header>
      <h2>{title}</h2>
      <ul>
        {task.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </header>
  );
};

const MERN = (data) => {
  var title;
  var task;
  tasklist.forEach((data) => {
    if (data.title == "MERN") {
      title = data.title;
      task = data.tasks;
    }
  });
  return (
    <header>
      <h2>{title}</h2>
      <ul>
        {task.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </header>
  );
};

const Java = (data) => {
  var title;
  var task;
  tasklist.forEach((data) => {
    if (data.title == "Java") {
      title = data.title;
      task = data.tasks;
    }
  });
  return (
    <header>
      <h2>{title}</h2>
      <ul>
        {task.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </header>
  );
};

function App() {
  return (
    <div>
      <h1>Task List</h1>
      <Task></Task>
      <Humber></Humber>
      <MERN></MERN>
      <Java></Java>
    </div>
  );
}

export default App;
