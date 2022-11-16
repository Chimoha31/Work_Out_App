import React from "react";
import file_icon from '../img/file_icon.png';

const Resister = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Teddy's Chat</span>
        <span className="title">Resister</span>
        <form>
          <input type="name" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label html="file">
            <img src={file_icon} alt="file_img" />
            <span>Add an avatar</span>
          </label>
          <button>Resister</button>
        </form>
        <p>You already have an account? Login</p>
      </div>
    </div>
  );
};

export default Resister;
