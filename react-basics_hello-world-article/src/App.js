import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Welcome to react!</h1>
      <p>That was not that difficult!</p>
    </article>
  );
}
