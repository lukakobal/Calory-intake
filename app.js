import "./styles.css";
import { useState } from "react";

export default function App() {
  const [meals, setMeals] = useState([]);

  const [input, setInput] = useState("");

  function addMeal() {
    if (!input.trim()) return;

    const newMeal = {
      id: Date.now(),
      name: input,
    };

    setMeals([...meals, newMeal]);
    setInput("");
  }

  return (
    <div className="app">
      <h1>Calorie App</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add meal..."
      />

      <button onClick={addMeal}>Add</button>

      <div>
        {meals.map((meal) => (
          <div key={meal.id}>{meal.name}</div>
        ))}
      </div>
    </div>
  );
}
