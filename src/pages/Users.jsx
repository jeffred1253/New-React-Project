import axios from "axios";
import React, { useEffect, useState } from "react";
import "./../style/users.css"

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/users")
      .then((res) => setData(res.data.data));
  }, []);

  return (
    <table>
      <thead>
        <th>Nom</th>
        <th>email</th>
      </thead>
      {data.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <button><a href={"http://127.0.0.1:8000/api/alterUser/" + user.id}>Modifier</a></button>
          <button><a href={"http://127.0.0.1:8000/api/delUser/" + user.id}>Supprimer</a></button>
        </tr>
      ))}
    </table>
  );
};

export default Users;
