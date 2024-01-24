import { useState } from "react"

function App() {
  const [message, setMessage] = useState('Isso vai mudar')

  return (
    <div>
      <h1>Hello World!</h1>
      <p>{message}</p>
      <button onClick={() => setMessage('Mudou')}>Change Message</button>
    </div>
  )
}

export default App
