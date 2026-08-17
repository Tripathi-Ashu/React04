import { useState, useMemo, useCallback } from 'react';
import Sum from './Sum';

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  const handleCheck = useCallback(() => {
    console.log("Hii", count);
  }, [count]);

  // Prime numbers calculate karne ki optimized logic
  const prime = useMemo(() => {
    if (number < 2) return 0;
    
    let total = 1; // 2 is prime

    for (let i = 3; i <= number; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) total++;
    }

    return total;
  }, [number]); // Dependency me [number] pass kiya gaya hai

  return (
    <>
      <button onClick={() => setNumber(number + 100)}>
        Increment Number
      </button>

      <h3>Total Number of Prime: {prime}</h3>

      <button onClick={handleCheck}>Click</button>

      <Sum number={number} />
    </>
  );
}

export default App;