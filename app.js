import "./styles.css";
import { useState } from "react";

export default function App() {
  const [meals, setMeals] = useState([]);
  const [calories, setCalories] = useState("");

  const [input, setInput] = useState("");

  function addMeal() {
    if (!input.trim()) return;

    const newMeal = {
      id: Date.now(),
      name: input,
      calories: calories,
    };

    setMeals([...meals, newMeal]);
    setInput("");
    setCalories("");
  }

  const totalCalories = meals.reduce((total, meal) => {
    return total + Number(meal.calories);
  }, 0);

  return (
    <div className="app">
      <h1>Calorie App</h1>
      <h2>Total: {totalCalories} kcal</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add meal..."
      />
      <input
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Calories..."
        type="number"
      />

      <button onClick={addMeal}>Add</button>

      <div>
        {meals.map((meal) => (
          <div key={meal.id}>
            {meal.name} — {meal.calories} kcal
          </div>
        ))}
      </div>
    </div>
  );
}
