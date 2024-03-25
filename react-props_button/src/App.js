import React from "react";
import "./styles.css";

export default function App() {
  return (
    <Button
      color="orange"
      disabled={false}
      text="Click this wonderful button!"
    />
  );
}

function Button({ color, disabled, text }) {
  return (
    <button style={{ color: color }} disabled={disabled}>
      {text}
    </button>
  );
}
