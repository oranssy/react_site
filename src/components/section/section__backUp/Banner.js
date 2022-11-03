import React from "react";

function Banner(props) {
  return (
    <section id="bannerType" className={`banner__wrap ${props.fonts}`}>
      <h2 className="blind">Black Hole</h2>
      <div className="banner__inner">
        <h3 className="title">Black Hole</h3>
        <p className="desc">
          What is inside black hole?
          <a href="https://youtu.be/e-P5IFTqB98" title="유튜브 페이지로 이동">
            https://www.youtube.com/c/inanutshell
          </a>
        </p>
        <span className="small">Kurzgesagt - In a Nutshell</span>
      </div>
    </section>
  );
}

export default Banner;
