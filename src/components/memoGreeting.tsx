import React, { memo } from 'react';

interface Props {
  name: string;
  age: number;
}

const memoGreeting = memo(({ name, age }: Props) => {
  console.log('Greeting component rendered');
  return (
    <div className='memoGreetingBox'>
      <p>Hello, {name}!</p>
      <p>You are {age} years old.</p>
    </div>
  );
});

export default memoGreeting;
