import React from "react";

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2 className="blind">Observation</h2>
      <p>What tools are used to observe space?</p>
      <div className={`image__inner ${props.attr[2]}`}>
        <article className="image img1">
          <h3 className="tit white">Hubble Space Telescope</h3>
          <p className="desc white">
            It was not the first space telescope, but it is one of the largest
            and most versatile, renowned both as a vital research tool and as a
            public relations boon for astronomy.
          </p>
          <a
            className="btn"
            href="https://medium.com/life-on-the-other-planets-whats-new/nasas-hubble-telescope-is-back-online-a7e3686d607a"
            title="자세히보기"
          >
            view more
          </a>
        </article>
        <article className="image img2">
          <h3 className="tit white">James Webb Space Telescope</h3>
          <p className="desc white">
            This is expected to enable a broad range of investigations across
            the fields of astronomy and cosmology, such as observation of the
            first stars and the formation of the first galaxies, and detailed
            atmospheric characterization of potentially habitable exoplanets.
          </p>
          <a
            className="btn"
            href="https://www.quantamagazine.org/why-nasas-james-webb-space-telescope-matters-so-much-20211203/"
            title="자세히보기"
          >
            view more
          </a>
        </article>
      </div>
    </section>
  );
}

export default Image;
