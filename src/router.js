import { Routes, Route } from 'react-router-dom';

import * as Page from './pages';

import './index.scss';

const Router = () => {
  return (
    <div className='container'>
      <Routes className="blur">
        <Route path="/" element={<Page.Home />} />
        <Route path="/:slug/profile" element={<Page.User />} />
      </Routes>
    </div>
  )
}

export default Router;