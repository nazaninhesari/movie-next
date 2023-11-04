"use client";
import { useState, useEffect } from "react";
import axios from "axios";
const RootLayout = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-between items-start gap-2 container mx-auto">
      <main>{children}</main>
      <aside className="w-[20rem] bg-zinc-100 p-4 rounded-lg flex flex-col gap-4">
        {users.map((user, index) => {
          return (
            <div className="bg-zinc-200 rounded p-2" key={index}>
              {user.name}
            </div>
          );
        })}
      </aside>
    </div>
  );
};

export default RootLayout;
