import React, { useState } from 'react';
import './App.css';
import FirstClass from './components/firstClass';
import SixthClass from './components/sixthClass';
import MemoGreeting from './components/memoGreeting';

function App() {

  const [name, setName] = useState('John');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName('Jane');
    setAge(30);
  };

  return (
    <div className="App">
      <FirstClass/>
      <SixthClass/>
      <div className='memo-greeting'>
      <MemoGreeting name={name} age={age} />
      <button onClick={handleClick}>Change Name and Age</button>
      </div>
    </div>
  );
}

export default App;

