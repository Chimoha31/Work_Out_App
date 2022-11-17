import React, { useState } from "react";
import file_icon from "../img/file_icon.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Resister = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL
            });
          });
        }
      );
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Teddy's Chat</span>
        <span className="title">Resister</span>
        <form onSubmit={handleSubmit}>
          <input type="name" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label html="file">
            <img src={file_icon} alt="file_img" />
            <span>Add an avatar</span>
          </label>
          <button>Resister</button>
          {err && <span>Something went wrong...</span>}
        </form>
        <p>You already have an account? Login</p>
      </div>
    </div>
  );
};

export default Resister;
