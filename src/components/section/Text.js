import React from "react";

function Text(props) {
  return (
    <section
      id="textType"
      className={`text__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>The Solar System</h2>
      <p>Planets</p>
      <div className={`text__inner ${props.attr[2]}`}>
        <article className="text">
          <figure className="text__header">
            <img src="img/text_bg01_icon01.png" alt="Sun" />
          </figure>
          <div className="text__box">
            <h3 className="tit">Sun</h3>
            <p className="desc">
              The sun keeps the planets in its orbit with a tremendous
              gravitational force. What would happen if it disappeared entirely?
              Learn about the star at the center of our solar system, and how it
              is critical to all life as we know it.
            </p>
            <a href="/">more</a>
          </div>
        </article>
        <article className="text">
          <figure className="text__header">
            <img src="img/text_bg01_icon02.png" alt="Mercury" />
          </figure>
          <div className="text__box">
            <h3 className="tit">Mercury</h3>
            <p className="desc">
              The planet Mercury is named after the messenger of the Roman gods
              because of its fleeting nature across the sky. Find out the reason
              behind its incredible speed, if it is indeed the hottest planet in
              the Solar System, and why the smallest planet in the solar system
              is slowly shrinking.
            </p>
            <a href="/">more</a>
          </div>
        </article>
        <article className="text">
          <figure className="text__header">
            <img src="img/text_bg01_icon03.png" alt="Venus" />
          </figure>
          <div className="text__box">
            <h3 className="tit">Venus</h3>
            <p className="desc">
              Named after the ancient Roman goddess of beauty, Venus is known
              for its exceptional brightness. Find out about the volcanoes that
              dot Venus's surface, the storms that rage in its atmosphere, and
              the surprising feature that makes Venus outshine every planet or
              star in the night sky.
            </p>
            <a href="/">more</a>
          </div>
        </article>
        <article className="text">
          <figure className="text__header">
            <img src="img/text_bg01_icon04.png" alt="Earth" />
          </figure>
          <div className="text__box">
            <h3 className="tit">Earth</h3>
            <p className="desc">
              Earth is the only planet known to maintain life. Find out the
              origins of our home planet and some of the key ingredients that
              help make this blue speck in space a unique global ecosystem.
            </p>
            <a href="/">more</a>
          </div>
        </article>
        <article className="text">
          <figure className="text__header">
            <img src="img/text_bg01_icon05.png" alt="Mars" />
          </figure>
          <div className="text__box">
            <h3 className="tit">Mars</h3>
            <p className="desc">
              Mars, the fourth planet from the sun, has been a source of
              intrigue throughout human history. Recent NASA exploratory
              expeditions revealed some of the planet's biggest mysteries. This
              video explains what makes Mars so different from Earth and what
              would happen if humans lived there.
            </p>
            <a href="/">more</a>
          </div>
        </article>
        <article className="text">
          <figure className="text__header">
            <img src="img/text_bg01_icon06.png" alt="Jupiter" />
          </figure>
          <div className="text__box">
            <h3 className="tit">Jupiter</h3>
            <p className="desc">
              Jupiter is the oldest and most massive world in the solar system.
              Learn about the planet's origin story, its Great Red Spot and
              oceanic moons, and how this ancient world influenced the formation
              of the solar system's other planets.
            </p>
            <a href="/">more</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Text;
