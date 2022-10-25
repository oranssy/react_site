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
            <h3>About</h3>
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
            <h3>Learn</h3>
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
            <h3>Explore</h3>
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
            <h3>Participate</h3>
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
          <div>
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Design</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>JOIN US</h3>
            <ul>
              <li>
                <a href="/">Ways to Give</a>
              </li>
              <li>
                <a href="/">Apply for a Grant</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          2022 oranssy. portfolio is here.
          <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
