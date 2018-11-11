import React, {Component} from "react";
import ReactDOM from "react-dom";
import './style/index.css';
import TodoList from "../components/TodoList";
import FlipMove from "react-flip-move";
var destination = document.querySelector("#container");

const Container = () => {
  return <div>
    <TodoList></TodoList>
  </div>;
};

ReactDOM.render(<Container />, destination);
