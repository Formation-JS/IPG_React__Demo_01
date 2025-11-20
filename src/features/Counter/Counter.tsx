import { useState } from 'react';
import CounterButton from './CounterButton';
import CounterDisplay from './CounterDisplay';

export default function Counter() {

  const [count, setCount] = useState(0);

  const handlePress = (val: number) => {
    setCount(count => count + val);
  }

  return (
    <div>
      <CounterDisplay result={count} />
      <CounterButton onCounterPress={handlePress} />
      <CounterButton onCounterPress={handlePress} step={5} />
    </div>
  )
}