import React, { useState } from 'react'

const Content = () => {
  const [name, setName] = useState('Joseph');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Joseph', 'Juna', 'Issac', 'Jacob', 'Raina'];
    const index = Math.floor(Math.random() * 5);
    setName(names[index]);
  }

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  }

  const handleClick2 = () => {
    console.log(count)
  }

  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello {name}!
      </p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click it</button>
      <button onClick={handleClick2}>Click it</button>
    </main>
  )
}

export default Content
