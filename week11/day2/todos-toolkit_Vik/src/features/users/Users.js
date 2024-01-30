import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers, addUser, addUserPrepare } from "./usersSlice";

const Users = (props) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [newAuthor, setNewAuthor] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddAuthor = () => {
    if (newAuthor.trim() !== "") {
      dispatch(addUser(newAuthor));
      setNewAuthor("");
    }
  };

  const handleAddAuthorPrepare = () => {
    if (newAuthor.trim() !== "") {
      dispatch(addUserPrepare(newAuthor));
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
        <button onClick={handleAddAuthorPrepare}>Add Author with Prepare</button>
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
