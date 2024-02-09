import FoodList from "./FoodList";
import mockItems from "../mock.json";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewstClick = () => setOrder("createdAt");
  const handleCalorieClick = () => setOrder("calorie");

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div>
      <button onClick={handleNewstClick}>최신순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
