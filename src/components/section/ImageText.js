import React from "react";

const imageTextCont = {
  blindName : "Careers",
  subTitle : "STAY CREATIVE",
  title : "Careers",
  desc : "게임 제작을 이끌고 성과를 만들어 내는 것은 결국 '사람'에서 시작됩니다.",
  imgClass1 : "img1",
  imgClass2 : "img2",
  aTitle1 : "PEOPLE & LIFE",
  aTitle2 : "CREATON RECRUIT",
};

const linkTitle = [
  { tit : "How We Work" }, 
  { tit : "Project Windless" }, 
  { tit : "Project XTRM" }, 
  { tit : "Art Department" },
  { tit : "PUBG STUDIOS" },
  { tit : "Special Project 2" }
];

const LinkText = ({ tit }) => {
  return  <li>
            <a href="/">{ tit }</a>
          </li>
}

function ImageText({ attr }) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2 className="blind">{imageTextCont.blindName}</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <span>{imageTextCont.subTitle}</span>
          <h3>{imageTextCont.title}</h3>
          <p>{imageTextCont.desc}</p>
          <ul>
            {linkTitle.map((info, index) => (
              <LinkText key={index} tit={info.tit}/>
            ))}
          </ul>
        </div>
        <div className={`imgText__img ${imageTextCont.imgClass1}`}>
          <a href="/">{imageTextCont.aTitle1}</a>
        </div>
        <div className={`imgText__img ${imageTextCont.imgClass2}`}>
          <a href="/" className="blue">
            {imageTextCont.aTitle2}
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImageText;
