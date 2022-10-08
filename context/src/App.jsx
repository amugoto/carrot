import { createContext, useState } from 'react'
import Foo from './Foo'
const CountContext = createContext()

function App() {
  const countState = useState(0)
  return (
    <CountContext.Provider value={countState}>
      <h1>Count: {countState[0]}</h1>
      <Foo context={CountContext} />
    </CountContext.Provider>
  )
}

export default App
