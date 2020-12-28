import React, { useState } from "react";
import "./maker.css";

export function Maker() {
  const [background, setBackground] = useState("white");
  const [firstColor, setFirstColor] = useState("");
  const [secondColor, setSecondColor] = useState("");

  function changeFirstColor(e) {
    setFirstColor(e.target.value);
  }
  function changeSecondColor(e) {
    setSecondColor(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setBackground(`linear-gradient(${firstColor}, ${secondColor})`);
  }

  const style = {
    background,
  };

  return (
    <div className="maker__wrapper" style={style}>
      <div className="maker__logo">
        <svg width="700" height="300" viewBox="0 0 100 100">
          <text
            text-anchor="middle"
            x="5"
            y="10"
            font-family="Times New Roman"
            font-size="14"
          >
            GRADIENT MAKER
          </text>
        </svg>
      </div>
      <form className="maker__form" onSubmit={handleSubmit}>
        <label className="maker__topLabel">
          top:
          <input
            type="text"
            name="maker__first-color"
            placeholder="type the color"
            value={firstColor}
            className="maker__first-color"
            onChange={changeFirstColor}
          ></input>
        </label>
        <label className="maker__bottomLabel">
          bottom:
          <input
            type="text"
            name="maker__second-color"
            placeholder="for example #b1368a or pink"
            value={secondColor}
            className="maker__second-color"
            onChange={changeSecondColor}
          ></input>
        </label>
        <button className="maker__button" type="submit">
          go
        </button>
      </form>
    </div>
  );
}
