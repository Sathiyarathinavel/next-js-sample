import React, { useState } from 'react'

const SampleReact = () => {
    const [name, setname] = useState("sathiya");
  return (
    <div>
      <h1>This is Sample State {name}</h1>
    </div>
  )
}

export default SampleReact
