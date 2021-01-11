import React, { useState, useEffect } from "react";
import { getSvg } from "../encodeSvg";
import "./maker.css";

export function Maker() {
  const [background, setBackground] = useState("white");
  const [firstColor, setFirstColor] = useState("");
  const [secondColor, setSecondColor] = useState("");

  useEffect(() => {
    const src = getSvg(
      `
      <svg width="16" height="16">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:${firstColor};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${secondColor};stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="16" height="16" fill="url(#grad1)" />
      </svg>
      `
    );
    document.querySelector("#favicon").setAttribute("href", src);
  }, [background]);

  function handleSubmit(e) {
    e.preventDefault();
    setBackground(`linear-gradient(${firstColor}, ${secondColor})`);
  }

  const style = {
    background,
  };

  return (
    <div className='maker__wrapper' style={style}>
      <div className='maker__logo'>
        <svg width='700' height='300' viewBox='0 0 100 100'>
          <text
            text-anchor='middle'
            x='5'
            y='10'
            font-family='Times New Roman'
            font-size='14'
          >
            GRADIENT MAKER
          </text>
        </svg>
      </div>
      <form className='maker__form' onSubmit={handleSubmit}>
        <label className='maker__topLabel'>
          top:
          <input
            type='text'
            name='maker__first-color'
            placeholder='type the color'
            value={firstColor}
            className='maker__first-color'
            onChange={(e) => setFirstColor(e.target.value)}
          ></input>
        </label>
        <label className='maker__bottomLabel'>
          bottom:
          <input
            type='text'
            name='maker__second-color'
            placeholder='for example #b1368a or pink'
            value={secondColor}
            className='maker__second-color'
            onChange={(e) => setSecondColor(e.target.value)}
          ></input>
        </label>
        <button className='maker__button' type='submit'>
          go
        </button>
      </form>
    </div>
  );
}
