import React from "react";
import "./App.css";
import Student from './Student';
import Useofstate from "./Useofstate";
import ImageManipulation from "./ImageManipulation";
import Login from "./Login";


function App() {
  const data = [
  //   {
  //   College: "ABES Engineering College",
  //   pic: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/2023/McLaren/Formula%201%20header%20template%20(35)",
  //   name: "Sidhishf",
  //   rollno: "272",
  //   branch: "CSE"
  // },
  //   {
  //   College: "ABES Engineering College",
  //   pic: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/2023/McLaren/Formula%201%20header%20template%20(35)",
  //   name: "Sidhishf",
  //   rollno: "272",
  //   branch: "CSE"
  // },
  //   {
  //   College: "ABES Engineering College",
  //   pic: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/2023/McLaren/Formula%201%20header%20template%20(35)",
  //   name: "Sidhishf",
  //   rollno: "272",
  //   branch: "CSE"
  // },
]
  return (
    <div className="student-info">
      {/* <Student data={data[1]} />
      <Student data={data[0]} />
      <Student data={data[2]} /> */}
      {/* <Useofstate /> */}
      {/* <ImageManipulation /> */}
      <Login />
    </div>

  );
}

export default App;
