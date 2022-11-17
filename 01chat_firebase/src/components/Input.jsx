import React from 'react';
import file_icon from '../img/file_icon.png';
import attach from '../img/attach.png';

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={attach} alt=""/>
        <input type="file" id="file" style={{display: "none"}} />
        <label htmlFor="file">
          <img src={file_icon} alt=""/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
