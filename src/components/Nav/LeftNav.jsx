import React from "react";
import { Link, useLocation } from "react-router-dom";

const LeftNav = () => {
  const headerData = [
    { icon: 'uil uil-estate', text: 'Home', path: '/' },
    { icon: 'uil uil-megaphone', text: 'Latest', path: '/latest' },
    { icon: 'uil uil-location-point', text: 'Explore', path: '/explore' },
    { icon: 'uil uil-file', text: 'File', path: '/file' },
    { icon: 'uil uil-images', text: 'Gallery', path: '/gallery' },
    { icon: 'uil uil-schedule', text: 'Events', path: '/events' },
  ]
  const { pathname } = useLocation();
  return (
    <div className="LeftNav">
      <div className="LeftNav__wrap">
        <div className="LeftNav__wrap-logo">ultranet</div>
        <ul className="LeftNav__wrap-menu">
          <div className="LeftNav__wrap-menu-title">menu</div>
          {headerData.map((e, i) => (
            <Link key={i} to={e.path}>
              <li className={`LeftNav__wrap-menu-item ${pathname===e.path ? 'active' : ''}`}>
                <div className="LeftNav__wrap-menu-item-icon">
                  <i className={e.icon}></i>
                </div>
                <div className="LeftNav__wrap-menu-item-text">{e.text}</div>
              </li>
            </Link>
          ))}
        </ul>
        <ul className="LeftNav__wrap-menu">
          <div className="LeftNav__wrap-menu-title">your favorite</div>
          <li className="LeftNav__wrap-menu-item">
            <div className="LeftNav__wrap-menu-item-icon">
            <i className="fa-solid fa-explosion"></i>
            </div>
            <div className="LeftNav__wrap-menu-item-text">Forest</div>
          </li>
          <li className="LeftNav__wrap-menu-item">
            <div className="LeftNav__wrap-menu-item-icon">
            <i className="fa-solid fa-dove"></i>
            </div>
            <div className="LeftNav__wrap-menu-item-text">Birds</div>
          </li>
          <li className="LeftNav__wrap-menu-item">
            <div className="LeftNav__wrap-menu-item-icon">
            <i className="fa-solid fa-tree"></i>
            </div>
            <div className="LeftNav__wrap-menu-item-text">Nature</div>
          </li>
          <li className="LeftNav__wrap-menu-item">
            <div className="LeftNav__wrap-menu-item-icon">
            <i className="fa-solid fa-dog"></i>
            </div>
            <div className="LeftNav__wrap-menu-item-text">Animals</div>
          </li>
          <li className="LeftNav__wrap-menu-item">
            <div className="LeftNav__wrap-menu-item-icon">
            <i className="fa-solid fa-motorcycle"></i>
            </div>
            <div className="LeftNav__wrap-menu-item-text">MotoBike</div>
          </li>
          <li className="LeftNav__wrap-menu-item">
            <div className="LeftNav__wrap-menu-item-icon">
            <i className="fa-solid fa-explosion"></i>
            </div>
            <div className="LeftNav__wrap-menu-item-text">Mojave</div>
          </li>
          <li className="LeftNav__wrap-menu-item">
            <div className="LeftNav__wrap-menu-item-icon">
            <i className="fa-solid fa-flask-vial"></i>
            </div>
            <div className="LeftNav__wrap-menu-item-text">Chemistry</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LeftNav;