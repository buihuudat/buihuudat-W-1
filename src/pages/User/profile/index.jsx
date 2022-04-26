import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Timeline from './Timeline';


import './style.scss';

function UserProfile() {
  const headerData = [
    { text: 'Timeline', path:'/:slug/profile' },
    { text: 'About', path:'/:slug/profile/about' },
    { text: 'Friends', path:'/:slug/profile/friends' },
    { text: 'Photos', path:'/:slug/profile/photos' },
    { text: 'More', path:'/:slug/profile/more' },
  ]
  const {pathname} = useLocation();
  return (
    <div className="UP blur">
      <div className="UP__wrap">
        <div className="UP__wrap-background">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/430f78f5-85f2-4fe7-a800-84b0379dde92/det6rg5-564e2f1c-882b-4f36-afd9-38b2c5058c6b.jpg/v1/fill/w_1264,h_632,q_70,strp/runner_by_khius_det6rg5-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvNDMwZjc4ZjUtODVmMi00ZmU3LWE4MDAtODRiMDM3OWRkZTkyXC9kZXQ2cmc1LTU2NGUyZjFjLTg4MmItNGYzNi1hZmQ5LTM4YjJjNTA1OGM2Yi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.4IhG-oxTzCdrkdtfgJoWavw3c-SDiFEsM6c-iyIOO-I" alt="" />
        </div>
        <div className="UP__wrap-avatar">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3eeaee7-70a2-4978-ab5f-e49bc76b97ed/df44gh9-2a72f7a9-0139-4b49-b5a7-e734a186646d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzZWVhZWU3LTcwYTItNDk3OC1hYjVmLWU0OWJjNzZiOTdlZFwvZGY0NGdoOS0yYTcyZjdhOS0wMTM5LTRiNDktYjVhNy1lNzM0YTE4NjY0NmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VCyrjqGjCCE-8eDJdmLhHcNS7geBqNqkbjGXBJhtKoQ" alt="" />
          <span>Bui Huu Dat</span>
          <div className="UP__active"><i className="fa-solid fa-circle-check"></i></div>
        </div>
        <ul className="UP__wrap-links">
          {headerData.map((item, index) => (
            <li key={index} className={`UP__wrap-links-item ${pathname.split('/')[3] === item.path.split('/')[3] ? 'user-active' : ''}`}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default UserProfile