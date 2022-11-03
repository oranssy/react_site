import React from "react";

function ImageText({ attr }) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2 className="blind">이미지텍스트 타입</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <span>Space Probes</span>
          <h3>Exploration</h3>
          <p>
            Human space exploration helps to address fundamental questions about
            our place in the Universe and the history of our solar system.
          </p>
          <ul>
            <li>
              <a href="/">Jan 7, 1610 CE: Galileo Discovers Jupiter’s Moons</a>
            </li>
            <li>
              <a href="/">Apollo 11 Astronauts on Moon</a>
            </li>
            <li>
              <a href="/">Oct 4, 1957 CE: USSR Launches Sputnik</a>
            </li>
            <li>
              <a href="/">Women of NASA</a>
            </li>
            <li>
              <a href="/">Exploring Mars</a>
            </li>
            <li>
              <a href="/">scale of the universe 2</a>
            </li>
          </ul>
        </div>
        <div className="imgText__img img1">
          <a href="/">Star Search</a>
        </div>
        <div className="imgText__img img2">
          <a href="/" className="blue">
            Space Gym
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImageText;
