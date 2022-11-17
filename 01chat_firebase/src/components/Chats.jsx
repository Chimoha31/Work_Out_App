import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/1954515/pexels-photo-1954515.jpeg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Teddy</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Teddy</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="userChatInfo">
          <span>Teddy</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
