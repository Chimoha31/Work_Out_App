import React, { useState } from "react";
import file_icon from "../img/file_icon.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Resister = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    // const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);
      //Update profile
      await updateProfile(res.user, {
        displayName,
      });
      //create user on firestore
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
      });
      //create empty user chats on firestore
      await setDoc(doc(db, "userChats", res.user.uid), {});
      navigate("/");
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
          <label htmlFor="file">
            <img src={file_icon} alt="file_img" />
            <span>Add an avatar</span>
          </label>
          <button>Resister</button>
          {err && <span>Something went wrong...</span>}
        </form>
        <p>
          You already have an account?<Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Resister;

// **
// Firebase Storageを写真保存に使った場合
// **
// const storageRef = ref(storage, displayName);
// const uploadTask = uploadBytesResumable(storageRef, file);

// uploadTask.on(
//   (error) => {
//     setErr(true);
//   },
//   () => {
//     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
//       await updateProfile(res.user, {
//         displayName,
//         photoURL: downloadURL
//       });
//     });
//   }
// );
