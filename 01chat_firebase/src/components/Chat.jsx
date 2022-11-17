import React from "react";
import "../style.scss";
import videoCall from "../img/videoCall.png";
import addUser from "../img/addUser.png";
import menu from "../img/menu.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Teddy</span>
        <div className="chatIcons">
          <img src={videoCall} alt="" />
          <img src={addUser} alt="" />
          <img src={menu} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
