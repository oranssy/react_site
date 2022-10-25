import React from "react";

function Header(props) {
  return (
    <header id="headerType" className={`header__wrap ${props.fonts}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            cosmos <em>info</em>
          </a>
        </div>
        <div className="header__menu">
          <ul>
            <li>
              <a href="/sliderType">Library</a>
            </li>
            <li>
              <a href="/imageType">Observation</a>
            </li>
            <li>
              <a href="/imgTextType">Exploration</a>
            </li>
            <li>
              <a href="/cardType">Solar Power</a>
            </li>
            <li>
              <a href="/bannerType">Black Hole</a>
            </li>
            <li>
              <a href="/textType">Planets</a>
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
