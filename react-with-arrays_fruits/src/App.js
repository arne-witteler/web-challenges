import Card from "./components/Card";

export default function App() {
  return (
    <div className="app">
      {fruits.map((fruit) => (
        <ul key={fruit.id}>
          <Card name={fruit.name} color={fruit.color} />
        </ul>
      ))}
    </div>
  );
}

const fruits = [
  {
    id: 1337,
    name: "🍌 Banana",
    color: "yellow",
  },
  {
    id: 1338,
    name: "🍏 Apple",
    color: "green",
  },
  {
    id: 1339,
    name: "🥝 Kiwi",
    color: "green",
  },
  {
    id: 1340,
    name: "🍍 Pineapple",
    color: "yellow",
  },
  {
    id: 1341,
    name: "🍓 Strawberry",
    color: "red",
  },
];
