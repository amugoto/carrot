import Foo from './Foo'
import useCount from './hooks/count'

function App() {
  const { count } = useCount()

  return (
    <>
      <h1>Count: {count}</h1>
      <Foo />
    </>
  )
}

export default App
