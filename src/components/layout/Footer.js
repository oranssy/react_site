import React from "react";

function Footer({ attr }) {
  return (
    <footer
      id="footerType"
      className={`footer__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2 className="blind">footer</h2>
      <div className="footer__inner container">
        <div className="footer__menu">
          <div>
            <h3>찾아오시는 길</h3>
            <ul>
              <li>
                <a href="/">News and Impact</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>개인정보처리방침</h3>
            <ul>
              <li>
                <a href="/">Introduction</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>문의하기</h3>
            <ul>
              <li>
                <a href="/">Our Explorers</a>
              </li>
              <li>
                <a href="/">Our Projects</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>열린신고제도</h3>
            <ul>
              <li>
                <a href="/">Community</a>
              </li>
              <li>
                <a href="/">Contributors</a>
              </li>
              <li>
                <a href="/">Events</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
        CREATON
          <br />
          © 2022 CREATON, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
