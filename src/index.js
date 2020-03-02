import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Ifeoma N",
  location: "Lagos",
  books: "books",
  foodType: "Everything",
  age: 9,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "Ify__N",
  avatar:
    "https://res.cloudinary.com/ifeoma/image/upload/v1582913434/230eef8f41ab2c537e1c8c000e1033dc_kpu5d0.jpg"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  const url = `https://twitter.com/${user.twitterUsername}`;

  return (
    <div className="App">
      {/* Show user data here */}
      <div className="user-deets">
        <img src={user.avatar} alt={user.name} />

        <h3>
          <a href={url}>{user.name}</a>
        </h3>

        <p>
          <strong>Location</strong>
          {user.location}
        </p>

        <p>
          <strong>Reads</strong>
          {user.books}
        </p>

        <p>
          <strong>Best Food</strong>
          {user.foodType}
        </p>

        <p>
          <strong>Age</strong>
          {user.age}
        </p>

        <p>
          <strong>Twitter</strong>
          <a href={url}>@{user.twitterUsername} </a>
        </p>
      </div>

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
