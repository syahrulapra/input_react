import './App.css';
import { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={ev => setCount(count + 1)}>{count}</button>
  )
}

function Input() {
  const [tulisan, setTulisan] = useState('');

  return (
    <>
      <p>{tulisan}</p>
      <input type='text' onChange={ev => setTulisan(ev.target.value)} value={tulisan}></input>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input></Input>
      </header>
    </div>
  );
}

export default App;
