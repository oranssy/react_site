import React from "react";

const bannerCont = {
  blindName : "Black Hole",
  title : "Black Hole",
  desc : "What is inside black hole?",
  aTitle : "https://www.youtube.com/c/inanutshell",
  aLink : "https://youtu.be/e-P5IFTqB98",
  aLinkTit : "유튜브 페이지로 이동",
  subject : "Kurzgesagt - In a Nutshell",
}

function Banner(props) {
  return (
    <section id="bannerType" className={`banner__wrap ${props.fonts}`}>
      <h2 className="blind">{bannerCont.blindName}</h2>
      <div className="banner__inner">
        <h3 className="title">{bannerCont.title}</h3>
        <p className="desc">
          {bannerCont.desc}
          <a href={bannerCont.aLink} title={bannerCont.aLinkTit}>
            {bannerCont.aTitle}
          </a>
        </p>
        <span className="small">{bannerCont.subject}</span>
      </div>
    </section>
  );
}

export default Banner;
