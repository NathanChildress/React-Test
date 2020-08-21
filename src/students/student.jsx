import React from "react";
import Score from "../score/score";

const Student = (props) => (
  <div>
    <h2>{props.student.name}</h2>
    <p />
    {props.student.bio}
    {props.student.scores.map((score, idx) => (
      <Score score={score} key={idx} idx={idx} />
    ))}
  </div>
);

export default Student;
