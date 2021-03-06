import React, { useState } from 'react'

function Post() {
  const [action, setAction] = useState(false);
  const [countLike, setCountLike] = useState(0);
  const [countComment, setCountComment] = useState(0);
  const [countShare, setCountShare] = useState(0);

  return (
    <div className="Post">
      <div className="Post__wrap">
        <div className="Post__wrap-box">
          <div className="Post__wrap-box-header">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3eeaee7-70a2-4978-ab5f-e49bc76b97ed/df44gh9-2a72f7a9-0139-4b49-b5a7-e734a186646d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzZWVhZWU3LTcwYTItNDk3OC1hYjVmLWU0OWJjNzZiOTdlZFwvZGY0NGdoOS0yYTcyZjdhOS0wMTM5LTRiNDktYjVhNy1lNzM0YTE4NjY0NmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VCyrjqGjCCE-8eDJdmLhHcNS7geBqNqkbjGXBJhtKoQ" alt="" />
            <div className="Post__wrap-box-header-content">
              <div className="Post__wrap-box-header-content-name">
                <span>Bui Huu Dat</span>
                <span> create new </span>
                <a href="">album</a>
              </div>
              <div className="Post__wrap-box-header-content-time">6 hours ago</div>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          <div className="Post__wrap-box-caption">
            <input type="text" disabled value={'Cuộc sống là những chuyến đi 😆😆'} />
          </div>
          <div className="Post__wrap-box-content">
            <img src="https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/278243960_1400474613736849_853921073538639661_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=UN1u97HmNAcAX8ni5Jt&_nc_ht=scontent.fdad3-3.fna&oh=00_AT83hcpGpIJSgkj0zEwbgwQPt41etn5KlF1s4TZi5rq27w&oe=6272BDF9" alt="" />
            <img src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/278259025_1400475070403470_8401954302963703914_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=35aBx5lNlAcAX_7wjXG&tn=4jdssrC75T2CXFzh&_nc_ht=scontent.fdad3-5.fna&oh=00_AT8LylwjCWIZT_e9-iXKpAUhY9YV_PqrcwHj2whHa3t1hA&oe=6271BA07" alt="" />
            <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/278279160_1400474630403514_4347005733089985135_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=5GID27JlzpcAX85NYjs&_nc_ht=scontent.fdad3-4.fna&oh=00_AT8JmVelV6IrdquQrav1PvqjxPF4UFsUeQsA0pHFaRoSAA&oe=62713CB6" alt="" />
          </div>
          <div className="Post__wrap-box-actions">
            <div className="Post__wrap-box-actions-a" title='Like this post'>
              <i className="uil uil-heart" onClick={() => setCountLike(countLike + 1)} ></i>
              <span>{countLike}</span>
            </div>
            <div className="Post__wrap-box-actions-a" title='Wirte a commtent...'>
              <i className="uil uil-comment-alt"></i>
              <span>{countComment}</span>
            </div>
            <div className="Post__wrap-box-actions-a" title='Share this post'>
              <i className="uil uil-share"></i>
              <span>{countShare}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;
