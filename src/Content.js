import React from 'react'

const Content = () => {
  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const index = Math.floor(Math.random() * 3);
    return names[index];
  }

  return (
    <main>
      <p>
        Hello {handleNameChange()}
      </p>
    </main>
  )
}

export default Content
