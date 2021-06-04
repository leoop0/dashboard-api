import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import chevron from "../assets/chevron-down.svg";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const [theme, setTheme] = useState(false);

  const handleTheme = () => setTheme(!theme);

  return (
    <div className="nav-container">
      <div className="nav">
        <div className="title-nav">
          <Link to="/" className="nav-logo">
            <h5>Dashboard API</h5>
          </Link>
        </div>
        <div className="content-nav">
          <ul>
            <li
              onClick={handleTheme}
              className={
                theme
                  ? "theme-switcher theme-dark"
                  : "theme-switcher theme-light"
              }
            >
              <img src={moon} alt="" className="darkTheme" />
              <img src={sun} alt="" className="lightTheme" />
            </li>
            <li>
              <Link to="/meteo" className="nav-item">
                Meteo
              </Link>
            </li>
            <li>
              <Link to="/notion" className="nav-item">
                Notion
              </Link>
            </li>
            <li>
              <Link to="/github" className="nav-item">
                Github
              </Link>
            </li>
            <li
              onMouseEnter={handleClick}
              className={
                click ? "menu-nav-active nav-item" : "menu-nav nav-item"
              }
              onMouseLeave={closeMenu}
            >
              Autres
              <img src={chevron} alt="" />
              <div className="noclose"></div>
              <div className="dropdown">
                <ul>
                  <li>
                    <Link to="/pokemon" className="nav-item">
                      Pokemon
                    </Link>
                  </li>
                  <li>
                    <Link to="/minecraft" className="nav-item">Minecraft</Link>
                  </li>
                  <li>
                    <Link to="/shifumi" className="nav-item">Shifumi</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
