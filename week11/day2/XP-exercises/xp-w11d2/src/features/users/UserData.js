import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";
import "./UserData.css";

const UserData = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading === "pending") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>User Data</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            ID: {user.id}, 
            Name: {user.name}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default UserData;
