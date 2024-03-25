import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={2120} valueB={7500} />;
}

function Sum({ valueA, valueB }) {
  return (
    <div>
      {valueA} + {valueB} = {valueA + valueB}
    </div>
  );
}
