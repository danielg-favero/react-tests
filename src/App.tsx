import { useState } from "react"
import { Button } from "./components/Button"

function App() {
  const [message, setMessage] = useState('Isso vai mudar')

  const handleMessage = () => {
    setMessage('Mudou')
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <p>{message}</p>
      <Button disabled={false} onClick={handleMessage}>Change Message</Button>
    </div>
  )
}

export default App
