import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [tweet, setTweet] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("currentUser"));
    if (userData) {
      setUser(userData);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleAddTweet = () => {
    if (tweet.trim() === "") return;

    const newComment = {
      text: tweet.trim(),
      date: new Date().toLocaleString(),
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) =>
      u.username === user.username ? { ...u, comments: [...u.comments, newComment] } : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    const updatedCurrentUser = {
      ...user,
      comments: [...user.comments, newComment],
    };
    localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));
    setUser(updatedCurrentUser);

    setTweet("");
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <section>
      <Header />

      <main className="profile-main">
        <section className="profile-header">
          <img
            className="avatar-profile"
            src={user.avatar}
            alt={`${user.username} avatar`}
          />
          <div className="profile-info">
            <h1 className="username-profile">Perfil de @{user.username}</h1>
            <button className="button-cerrar" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        </section>

        <section className="add-tweet">
          <div className="tweet-form">
            <input
              type="text"
              placeholder="Escribe un tweet"
              value={tweet}
              className="tweet-input"
              onChange={(e) => setTweet(e.target.value)}
            />
            <button onClick={handleAddTweet}>Twittear</button>
          </div>
        </section>

        <section className="seccion-tweets">
          <h2>Mis Tweets</h2>
          {user.comments.length === 0 ? (
            <p>No tienes tweets aún.</p>
          ) : (
            <ul className="tweet-list">
              {user.comments.map((t, index) => (
                <li className="tweet" key={index}>
                  <div className="tweet-header">
                    <img
                      className="avatar"
                      src={user.avatar}
                      alt={`${user.username}'s avatar`}
                      width="50"
                    />
                    <strong className="username">@{user.username}:</strong>
                  </div>
                  <p>{t.text}</p>
                  <small className="date">{t.date}</small>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </section>
  );
}
