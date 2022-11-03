import React from "react";

const cardTitle = {
  title : "The power of the sun",
  desc : "about solar power",
}

const cardCont = [
  {
    imgAddress : "./assets/img/site01_card01.jpg",
    imgAltCont : "태양계 이미지",
    title : "The Solar System",
    desc : "A star system is a group of planets, meteors, or other objects that orbit a large star. While there are many star systems, including at least 200 billion other stars in our galaxy, there is only one solar system. That's because our sun is known by its Latin name, Sol.",
    aTitle : "view more",
  },
  {
    imgAddress : "./assets/img/site01_card02.jpg",
    imgAltCont : "태양광 에너지 이미지",
    title : "Solar Power",
    desc : "California, a leading state in solar power, has found many ways to harness the Sun, the most powerful source of energy on the planet. Cities, such as Sacramento, are working to make solar power competitively priced and reliable with bulk use of solar cells and solar panels.",
    aTitle : "view more",
  },
  {
    imgAddress : "./assets/img/site01_card03.jpg",
    imgAltCont : "개기일식 이미지",
    title : "Solar Eclipse",
    desc : "A total solar eclipse only happens somewhere on Earth once every year or two. What is an eclipse? Learn more about how solar eclipses happen, the four types of eclipses, and how to view the sun safely if you're within the path of totality.",
    aTitle : "view more",
  },

];

const CardText = ({ imgAddress, imgAltCont, title, desc, aTitle }) =>{
  return  <article className="card">
            <figure className="card__header">
              <img
                src={imgAddress} 
                alt={imgAltCont} 
              />
            </figure>
            <div className="card__body">
              <h3 className="tit">{title}</h3>
              <p className="desc">{desc}</p>
              <a className="btn" href="/">{aTitle}<span>
                  <svg
                    width="65"
                    height="8"
                    viewBox="0 0 65 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0L0 4.5Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </article>
}

function Card(props) {
  return (
    <section
      id="cardType"
      className={`card__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>{cardTitle.title}</h2>
      <p>{cardTitle.desc}</p>
      <div className={`card__inner ${props.attr[2]}`}>
        {cardCont.map((info, index) => (
          <CardText key={index} imgAddress={info.imgAddress} imgAltCont={info.imgAltCont} title={info.title} desc={info.desc} aTitle={info.aTitle} />
        ))}
      </div>
    </section>
  );
}

export default Card;
