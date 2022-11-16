import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import '../style.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
    </div>
  )
}

export default Sidebar
