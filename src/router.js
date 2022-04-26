import { Routes, Route } from 'react-router-dom';

import * as Page from './pages';

import './index.scss';

const Router = () => {
  return (
    <div className='container'>
      <Routes>
        <Route index element={<Page.Home />} />
        <Route path=":slug/profile" element={<Page.User.UserProfile />}>
          <Route index element={<Page.User.Timeline />} />
          <Route path="about" element={<Page.Home/>} />
          <Route path="friends" element={<Page.User.Timeline />} />
          <Route path="photos" element={<Page.User.Timeline />} />
          <Route path="more" element={<Page.User.Timeline />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Router;