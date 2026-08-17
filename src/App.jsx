import { useState } from 'react';
import Food from './Food';
import Clock from './Clock';

function App() {
  const [foodItems, setFoodItems] = useState(['Apple', 'orange', 'banana'])

  function handleChange() {
    setFoodItems(['Mango', ...foodItems])
  }

  return (
    <>
      <Clock></Clock>
    </>
  );
}

export default App;