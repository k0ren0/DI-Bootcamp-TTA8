import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers, addUser, addUserPrepare } from "./usersSlice";

const Users = (props) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [newAuthor, setNewAuthor] = useState("");
  const [addMethod, setAddMethod] = useState("addUser");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddAuthor = () => {
    if (newAuthor.trim() !== "") {
      if (addMethod === "addUser") {
        dispatch(addUser(newAuthor));
      } else if (addMethod === "addUserPrepare") {
        dispatch(addUserPrepare(newAuthor)); // Используем addUserPrepare из usersSlice для добавления пользователя
      }
      setNewAuthor("");
    }
  };

  return (
    <div>
      <h2>Authors</h2>
      <div>
        <input
          type="text"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <button onClick={handleAddAuthor}>Add Author</button>
        <button onClick={() => setAddMethod("addUser")}>Add Author with addUser</button>
        <button onClick={() => setAddMethod("addUserPrepare")}>Add Author with addUserPrepare</button> {/* Вторая кнопка */}
      </div>

      <select>
        <option value={-1}>Select Author</option>
        {users.map((user) => {
          return (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Users;
