import React, { useContext } from "react";
import "../style.scss";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);

  const handleLogOut = () => {
    signOut(auth);
  };

  return (
    <div className="navbar">
      <span className="logo">Real Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/235805/pexels-photo-235805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <span>{currentUser.displayName}</span>
        <button onClick={handleLogOut}>logout</button>
      </div>
    </div>
  );
};

export default NavBar;
