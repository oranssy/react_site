import React from "react";

const textTitle = {
  title : "The Solar System",
  subTitle : "Planets",
};

const textCont = [
  {
    imgAddress : "./assets/img/site01_card01.jpg",
    imgAltTit : "Sun",
    title : "Sun",
    desc : "The sun keeps the planets in its orbit with a tremendous gravitational force. What would happen if it disappeared entirely? Learn about the star at the center of our solar system, and how it is critical to all life as we know it.",
    aTitle : "more",
  },
  {
    imgAddress : "./assets/img/site01_card01.jpg",
    imgAltTit : "Mercury",
    title : "Mercury",
    desc : "The planet Mercury is named after the messenger of the Roman gods because of its fleeting nature across the sky. Find out the reason behind its incredible speed, if it is indeed the hottest planet in the Solar System, and why the smallest planet in the solar system is slowly shrinking.",
    aTitle : "more",
  },
  {
    imgAddress : "./assets/img/site01_card01.jpg",
    imgAltTit : "Venus",
    title : "Venus",
    desc : "Named after the ancient Roman goddess of beauty, Venus is known for its exceptional brightness. Find out about the volcanoes that dot Venus's surface, the storms that rage in its atmosphere, and the surprising feature that makes Venus outshine every planet or star in the night sky.",
    aTitle : "more",
  },
  {
    imgAddress : "./assets/img/site01_card01.jpg",
    imgAltTit : "Earth",
    title : "Earth",
    desc : "Earth is the only planet known to maintain life. Find out the origins of our home planet and some of the key ingredients that help make this blue speck in space a unique global ecosystem.",
    aTitle : "more",
  },
  {
    imgAddress : "./assets/img/site01_card01.jpg",
    imgAltTit : "Mars",
    title : "Mars",
    desc : "Mars, the fourth planet from the sun, has been a source of intrigue throughout human history. Recent NASA exploratory expeditions revealed some of the planet's biggest mysteries. This video explains what makes Mars so different from Earth and what would happen if humans lived there.",
    aTitle : "more",
  },
  {
    imgAddress : "./assets/img/site01_card01.jpg",
    imgAltTit : "Jupiter",
    title : "Jupiter",
    desc : "Jupiter is the oldest and most massive world in the solar system. Learn about the planet's origin story, its Great Red Spot and oceanic moons, and how this ancient world influenced the formation of the solar system's other planets.",
    aTitle : "more",
  },
];

const TextOutput = ({ imgAddress, imgAltTit, title, desc, aTitle }) => {
  return  <article className="text">
            <figure className="text__header">
              <img src={imgAddress} alt={imgAltTit} />
            </figure>
            <div className="text__box">
              <h3 className="tit">{title}</h3>
              <p className="desc">
                {desc}
              </p>
              <a href="/">{aTitle}</a>
            </div>
          </article>
}

function Text(props) {
  return (
    <section
      id="textType"
      className={`text__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>{textTitle.title}</h2>
      <p>{textTitle.subTitle}</p>
      <div className={`text__inner ${props.attr[2]}`}>
        {textCont.map((info, index) => (
          <TextOutput key={index} imgAddress={info.imgAddress} imgAltTit={info.imgAltTit} title={info.title} desc={info.desc} aTitle={info.aTitle} />
        ))}
      </div>
    </section>
  );
}

export default Text;
