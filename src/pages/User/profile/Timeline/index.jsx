import React from 'react';
import Post from '../../post';

import './style.scss';

function Timeline() {
  return (
    <div className="Timeline">
      <div className="UP__content blur">
          <div className="UP__content-left">
            <div className="UP__content-introd">
              <div className="UP__content-introd-title">
                <span>Intoduction</span>
                <i className="fa-solid fa-ellipsis"></i>
              </div>
              <div className="UP__content-introd-content">
                <i className="fa-solid fa-briefcase"></i>
                <span>Developer fullstack at <a href="">Bui Huu Dat Entertainment</a></span>
              </div>
              <div className="UP__content-introd-content">
                <i className="fa-solid fa-house"></i>
                <span>From <a href="">Ho Chi Minh, Vietnam</a></span>
              </div>
              <div className="UP__content-introd-content">
                <i className="fa-solid fa-gamepad"></i>
                <span>Player name <a href="">Bui Huu Dat</a></span>
              </div>
            </div>
            <div className="UP__content-event">
              <div className="UP__content-event-bg">
                <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
              </div>
              <div className="UP__content-event-calendar">
                <div className="UP__content-event-calendar-month">Oct</div>
                <div className="UP__content-event-calendar-day">26</div>
              </div>
              <div className="UP__content-event-content">
                <span>Happy Birthday to me.</span>
                <p>26st Oct, 2022 00:00AM</p>
              </div>
            </div>
          </div>
          <div className="UP__content-right">
            <Post />
          </div>
        </div>
    </div>
  )
}

export default Timeline