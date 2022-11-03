import React from "react";

function Header(props) {
  return (
    <header id="headerType" className={`header__wrap ${props.fonts}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            CREATON
          </a>
        </div>
        <div className="header__menu">
          <ul>
            <li>
              <a href="/sliderType">About</a>
            </li>
            <li>
              <a href="/imageType">Studios</a>
            </li>
            <li>
              <a href="/imgTextType">Games</a>
            </li>
            <li>
              <a href="/cardType">More Experience</a>
            </li>
            <li>
              <a href="/bannerType">Careers</a>
            </li>
            <li>
              <a href="/textType">News</a>
            </li>
          </ul>
        </div>
        <div className="header__member">
          <a href="/">Log In</a>
        </div>
        <div className="header__ham">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
