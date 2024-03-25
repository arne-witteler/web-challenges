import "./styles.css";

export default function App() {
  return <Greeting name="Tom" />;
}

function Greeting({ name }) {
  return (
    <div>Hello, {name === "Feline" || name === "Felix" ? "Coach" : name}!</div>
  );
}
