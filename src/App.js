import React, { useState } from 'react';
import './style.css';
import Counter from './Counter';
import TodoList from './TodoList';
function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div>
      <TodoList />
      {/* conditional rendering */}
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? 'Hide Counter' : 'Show Counter'}
      </button>
      {showCounter && <Counter />}
    </div>
  );
}
export default App;
