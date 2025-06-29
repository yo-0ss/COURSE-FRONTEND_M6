import { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/Home.css";

export default function Home() {
  const [allTweets, setAllTweets] = useState([]);
  const [tweet, setTweet] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(loggedInUser);

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const tweetsWithUser = users.flatMap((u) =>
      u.comments.map((c) => ({
        avatar: u.avatar,
        username: u.username,
        text: c.text,
        date: c.date,
      }))
    );

    setAllTweets(tweetsWithUser);
  }, []);

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

    setAllTweets((prevTweets) => [
      ...prevTweets,
      {
        avatar: user.avatar,
        username: user.username,
        text: newComment.text,
        date: newComment.date,
      },
    ]);

    setTweet("");
  };

  return (
    <section>
      <Header />
      <main className="home-main">
        <h1 className="section-name">Inicio</h1>

        <section className="add-tweet">
          {user ? (
            <section>
              <h3>Escribe un tweet:</h3>
              <div className="tweet-form">
                <input
                  type="text"
                  placeholder="¿Qué estás pensando?"
                  value={tweet}
                  className="tweet-input"
                  onChange={(e) => setTweet(e.target.value)}
                />
                <button onClick={handleAddTweet}>Twittear</button>
              </div>
            </section>
          ) : (
            <p>Inicia sesión para twittear.</p>
          )}
        </section>

        <section className="seccion-tweets">
          <h2>Tweets de todos los usuarios:</h2>
          <ul className="tweet-list">
            {allTweets.length === 0 ? (
              <p>No hay tweets aún.</p>
            ) : (
              allTweets.map((t, index) => (
                <li className="tweet" key={index}>
                  <div className="tweet-header">
                    <img
                      className="avatar"
                      src={t.avatar}
                      alt={`${t.username}'s avatar`}
                      width="50"
                    />
                    <strong className="username">@{t.username}:</strong>
                  </div>
                  <p>{t.text}</p>
                  <small className="date">{t.date}</small>
                </li>
              ))
            )}
          </ul>
        </section>
      </main>
    </section>
  );
}
