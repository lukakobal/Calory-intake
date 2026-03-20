import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [meals, setMeals] = useState(() => {
    const savedMeals = localStorage.getItem("meals");
    return savedMeals ? JSON.parse(savedMeals) : [];
  });
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

  function deleteMeal(id) {
    setMeals(meals.filter((meal) => meal.id !== id));
  }

  const totalCalories = meals.reduce((total, meal) => {
    return total + Number(meal.calories);
  }, 0);

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

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
            <button onClick={() => deleteMeal(meal.id)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}
