import React, { useState } from "react";
import "../style.scss";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    // Firebase -> search -> queryで検索
    // 1.queryを作る
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    // 2.queryを作ったら検索された結果をget()する
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log(doc.data());
      });
    } catch (e) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = () => {
    
  }

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKey}
        />
      </div>
      {err && <span>User not founded</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img
            src="https://images.pexels.com/photos/235805/pexels-photo-235805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
