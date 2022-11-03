import React from "react";

const imageTitle = {
  title : "Observation",
  desc : "What tools are used to observe space?",
};

const imageCont = [
  {
    title : "Hubble Space Telescope",
    desc : "It was not the first space telescope, but it is one of the largest and most versatile, renowned both as a vital research tool and as a public relations boon for astronomy",
    imgClass : "img1",
    aTitle : "view more",
    aLink : "https://medium.com/life-on-the-other-planets-whats-new/nasas-hubble-telescope-is-back-online-a7e3686d607a",
  },
  {
    title : "James Webb Space Telescope",
    desc : "This is expected to enable a broad range of investigations across the fields of astronomy and cosmology, such as observation of the first stars and the formation of the first galaxies, and detailed atmospheric characterization of potentially habitable exoplanets.",
    imgClass : "img2",
    aTitle : "view more",
    aLink : "https://www.quantamagazine.org/why-nasas-james-webb-space-telescope-matters-so-much-20211203/",
  },
];

const ImageText = ({ title, desc, imgClass, aTitle, aLink }) => {
  return  <article className={`image ${imgClass}`}>
            <h3 className="tit white">{title}</h3>
            <p className="desc white">{desc}</p>
            <a className="btn" href={aLink} title="자세히보기">{aTitle}</a>
          </article>
}


function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2 className="blind">{imageTitle.title}</h2>
      <p>{imageTitle.desc}</p>
      <div className={`image__inner ${props.attr[2]}`}>
        {imageCont.map((info, index) => (
          <ImageText key={index} title={info.title} desc={info.desc} imgClass={info.imgClass} aTitle={info.aTitle} aLink={info.aLink} />
        ))}
      </div>
    </section>
  );
}

export default Image;
