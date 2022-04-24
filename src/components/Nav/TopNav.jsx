import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TopNav() {
  const [show, setShow] = useState(false);
  const [showDRD, setShowDRD] = useState(true);

  const handleInput = (e) => e.target.value.length > 0 ? setShow(true) : setShow(false);
  const handleClick = () => setShowDRD(!showDRD);
  
  return (
    <div className="TopNav">
      <div className="TopNav__wrap">
        <div className="TopNav__wrap-search">
          <button hidden={show} ><i className="fas fa-search" /></button>
          <input type="text" className="TopNav__wrap-search-input" onChange={e => handleInput(e)} placeholder="Search" />
          <button hidden={!show} ><i className="fas fa-search" style={{color: "#0060A1", fontWeight: "600", cursor: "pointer", fontSize: '1.5rem'}} /></button>
        </div>
        <div className="TopNav__wrap-check">
          <i className="uil uil-envelope-alt"></i>
          <i className="uil uil-bell"></i>
        </div>
        <div className="TopNav__wrap-user">
          <div className="TopNav__wrap-user-name">Bui Huu Dat</div>
          <div className="TopNav__wrap-user-avatar">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3eeaee7-70a2-4978-ab5f-e49bc76b97ed/df44gh9-2a72f7a9-0139-4b49-b5a7-e734a186646d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzZWVhZWU3LTcwYTItNDk3OC1hYjVmLWU0OWJjNzZiOTdlZFwvZGY0NGdoOS0yYTcyZjdhOS0wMTM5LTRiNDktYjVhNy1lNzM0YTE4NjY0NmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VCyrjqGjCCE-8eDJdmLhHcNS7geBqNqkbjGXBJhtKoQ" alt="avatar" />
          </div>
          <button onClick={handleClick}><i className="fa-solid fa-caret-down"></i></button>
          <ul className="TopNav__wrap-user-dropdown" hidden={showDRD}>
            <Link to='/:slug/profile'>
              <li className="TopNav__wrap-user-dropdown-item" onClick={() => setShowDRD(true)}>
                <i className="uil uil-user-circle"></i>
                <span>Profile</span>
              </li>
            </Link>
            <Link to='/settings'>
              <li className="TopNav__wrap-user-dropdown-item" onClick={() => setShowDRD(true)}>
                <i className="uil uil-cog"></i>
                <span>Settings</span>
              </li>
            </Link>
            <Link to='/logout'>
              <li className="TopNav__wrap-user-dropdown-item" onClick={() => setShowDRD(true)}>
                <i className="uil uil-sign-out-alt"></i>
                <span>Logout</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopNav