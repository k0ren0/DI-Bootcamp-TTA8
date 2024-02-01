import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Импорт useNavigate

// ln -s /Users/koren0/Documents/DI-Bootcamp-TTA8/week11/day4/jwt-lesson/config/db.js

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Получение функции navigate

  useEffect(() => {
    // Проверка на наличие токена
    if (!localStorage.getItem("token")) {
      navigate("/login"); // Если нет токена, перенаправляем на страницу входа
    } else {
      axios
        .get("http://localhost:5005/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Добавляем токен в заголовок
          },
        })
        .then((response) => {
          console.log("Полученные данные:", response.data); // Отладочный вывод
          setUsers(response.data);
        })
        .catch((error) => {
          console.error("Ошибка загрузки данных:", error);
        });
    }
  }, [navigate]);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name || "Unnamed User"} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
