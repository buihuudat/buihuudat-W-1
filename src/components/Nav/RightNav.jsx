import React from 'react';

import './style.scss';

function RightNav() {
  const storiesData = [
    {
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Aniekan Sam',
      time: '29-m',
    },
    {
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Alain Ndou',
      time: '3-h',
    },
    {
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Liliane Ndou',
      time: '5-h',
    },
    {
      img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Bouabdou Ndou',
      time: '6-h',
    },
    {
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Lisa Ndou',
      time: '9-h',
    },
    {
      img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Nana Dio',
      time: '10-h',
    },
    {
      img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Ohan Ndou',
      time: '13-h',
    },
  ]

  const contactsData = [
    {
      avt: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Moussa Ndou',
      active: 1,
    },
    {
      avt: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Mary Ndou',
      active: 0,
    },
    {
      avt: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Hery Montero',
      active: 1,
    },
    {
      avt: 'https://images.unsplash.com/photo-1495216875107-c6c043eb703f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Log Due',
      active: 0,
    },
    {
      avt: 'https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Sam Ndou',
      active: 0,
    },
    {
      avt: 'https://images.unsplash.com/photo-1492567291473-fe3dfc175b45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Hierry Ndou',
      active: 1,
    },
    {
      avt: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Belle Ndou',
      active: 1,
    },
    {
      avt: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Ala Ndou',
      active: 0,
    },
    {
      avt: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Truman Ndou',
      active: 1,
    },
    {
      avt: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Tun Ndou',
      active: 1,
    },
    {
      avt: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Willy Ndou',
      active: 1,
    },
    {
      avt: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Garry Ndou',
      active: 1,
    },
    {
      avt: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Darry Ndou',
      active: 1,
    },
    {
      avt: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Dasdas Ndou',
      active: 1,
    },
    {
      avt: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Rose Ndou',
      active: 1,
    },
    {
      avt: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      name: 'Hope Ndou',
      active: 1,
    },
  ]
  return (
    <div className="RightNav">
      <div className="RightNav__wrap">
        <div className="RightNav__stories">
          <div className="RightNav__stories-header">STORIES</div>
          <ul className="RightNav__stories-items">
            {storiesData.map((story, index) => (
              <li key={index} className="RightNav__stories-items__item">
                  <div className="RightNav__stories-items__item__avt">
                    <img src={story.img} alt="avt" />
                  </div>
                <div className='RightNav__stories-items__item-content'>
                  <div className="RightNav__stories-items__item__name">
                    {story.name}
                  </div>
                  <div className="RightNav__stories-items__item__time">
                    {(story.time.split('-')[1] == 'm' ? story.time.split('-')[0] + 'm' : story.time.split('-')[0] + 'h') + ' ago'}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="RightNav__contacts">
          <div className="RightNav__contacts-header">CONTACTS</div>
          <ul className="RightNav__contacts-items">
            {contactsData.map((contact, index) => (
              <li key={index} className="RightNav__contacts-items__item">
                <div className="RightNav__contacts-items__item__avt">
                  <img src={contact.avt} alt="avt" />
                </div>
                <div className="RightNav__contacts-items__item__name">
                  {contact.name}
                </div>
                <div className="RightNav__contacts-items__item__active">
                  <i class={`fa-solid fa-circle ${contact.active == 1 ? 'active-color' : ''}`}></i>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RightNav;