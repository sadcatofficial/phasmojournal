import React, { useState, useContext } from "react";
import "../css/Evidences.scss";
import EvidenceContext from "../context";
const Evidences = () => {
  // state
  // 0 - null
  // 1 - found
  // 2 - declined
  // 3 - does not meet the conditions
  let {evidences,changeEvidences} = useContext(EvidenceContext);

  let chooseEvidence = (e) => {
    changeEvidences(
      evidences.map((element, index) => {
        if (index === e.target.id - 1) {
          if (element.state === 0) return { ...element, state: 1 };
          if (element.state === 1) return { ...element, state: 2 };
          if (element.state === 2) return { ...element, state: 0 };
        } else return element;
      })
    );
  };

  let getClassName = (element) => {
    let states = {
      0: "evidence",
      1: "evidence confirmed",
      2: "evidence declined",
      3: "evidence blocked",
    };

    return states[element.state];
  };
  return (
    <div className="evidence-box">
      {evidences.map((element) => (
        <div
          className={getClassName(element)}
          id={element.id}
          onClick={chooseEvidence}
        >
          <div className="evidence-text" id={element.id}>
            {" "}
            {element.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Evidences;
