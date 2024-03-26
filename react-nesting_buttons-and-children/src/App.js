import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Hallo!</Button>
      <Button>Ciao!</Button>
      <Button>¡Hola!</Button>
      <Button>Salut!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
