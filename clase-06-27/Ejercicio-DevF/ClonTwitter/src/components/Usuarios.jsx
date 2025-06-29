import { useEffect } from "react";

export default function Usuarios() {
  useEffect(() => {
    const existingUsers = localStorage.getItem("users");
    if (!existingUsers) {
      const users = [
        {
          username: "yoss123",
          email: "yoss.rios27@gmail.com",
          password: "1234",
          avatar: "https://i.pravatar.cc/150?img=9",
          comments: [],
        },
        {
          username: "ana456",
          email: "ana@example.com",
          password: "abcd",
          avatar: "https://i.pravatar.cc/150?img=23",
          comments: [
            { text: "Este es mi primer tweet.", date: "28/6/2025, 8:15:00 p.m" },
          ],
        },
        {
          username: "luis789",
          email: "luis@example.com",
          avatar: "https://i.pravatar.cc/150?img=1",
          password: "qwerty",
          comments: [],
        },
      ];
      localStorage.setItem("users", JSON.stringify(users));
      console.log("Usuarios iniciales cargados.");
    }
  }, []);

  return null;
}
