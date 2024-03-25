import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Welcome to react!</h2>
      <label htmlFor="inputField">Input Field:</label>
      <input type="text" id="inputField" />
      <a className="article__link" href="https://de.wikipedia.org/wiki/React">
        +++ Everything you need to know about React. +++
      </a>
    </article>
  );
}
