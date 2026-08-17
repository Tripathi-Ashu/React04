import { useState } from 'react';
import Food from './Food';

function App() {
  const [foodItems, setFoodItems] = useState(['Apple', 'orange', 'banana'])

  function handleChange() {
    setFoodItems(['Mango', ...foodItems])
  }

  return (
    <>
      <button onClick={handleChange}>Increment</button>
      <Food foods={foodItems} />
    </>
  );
}

export default App;