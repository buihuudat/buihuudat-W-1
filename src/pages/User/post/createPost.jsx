import React from 'react';

function createPost() {
  const handleChangeType = (e) => {
    console.log(document.getElementsByClassName('CP__wrap-box-header-button'))
  }
  return (
    <div className="CP">
      <div className="CP__wrap">
        <div className="CP__wrap-box">
          <div className="CP__wrap-box-header">
            <input type='text' className="CP__wrap-box-header-button" value={'Status'}/>
            <input type='text' className="CP__wrap-box-header-button" value={'Photos'}/>
            <input type='text' className="CP__wrap-box-header-button" value={'Videos'}/>
          </div>
          <div className="CP__wrap-box-input">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3eeaee7-70a2-4978-ab5f-e49bc76b97ed/df44gh9-2a72f7a9-0139-4b49-b5a7-e734a186646d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzZWVhZWU3LTcwYTItNDk3OC1hYjVmLWU0OWJjNzZiOTdlZFwvZGY0NGdoOS0yYTcyZjdhOS0wMTM5LTRiNDktYjVhNy1lNzM0YTE4NjY0NmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VCyrjqGjCCE-8eDJdmLhHcNS7geBqNqkbjGXBJhtKoQ" alt="" />
            <input type="text" placeholder="What's on your mind?" />
          </div>
          <hr />
          <div className="CP__wrap-box-actions">
            <div className="CP__wrap-box-actions-content">
              <div className="CP__wrap-box-actions-a">
                <div className="CP__wrap-box-actions-a-icon">👦</div>
                <div className="CP__wrap-box-actions-a-text">People</div>
              </div>
              <div className="CP__wrap-box-actions-a">
                <div className="CP__wrap-box-actions-a-icon">💡</div>
                <div className="CP__wrap-box-actions-a-text">Check in</div>
              </div>
              <div className="CP__wrap-box-actions-a">
                <div className="CP__wrap-box-actions-a-icon">😀</div>
                <div className="CP__wrap-box-actions-a-text">Mood</div>
              </div>
            </div>
            <button className="CP__wrap-box-actions-button">Share</button>
          </div>
        </div>
        <div className="CP__create">
          <div className="CP__create-box">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default createPost;