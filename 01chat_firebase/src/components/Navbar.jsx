import React from 'react';
import '../style.scss';

const NavBar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Real Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/235805/pexels-photo-235805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <span>Teddy M</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default NavBar
