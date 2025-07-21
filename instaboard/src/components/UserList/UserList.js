import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../UserCard/UserCard";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=12");
      setUsers((prevUsers) => [...prevUsers, ...response.data.results]);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-list-container">
      <h2>InstaBoard Users</h2>

      <div className="user-list">
        {users.map((user, index) => (
          <UserCard
            key={index}
            picture={user.picture.large}
            name={`${user.name.first} ${user.name.last}`}
            email={user.email}
          />
        ))}
      </div>

      <button className="load-more" onClick={fetchUsers}>
        Load More
      </button>
    </div>
  );
}

export default UserList;
