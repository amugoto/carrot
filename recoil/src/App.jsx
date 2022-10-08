import { useRecoilValue } from 'recoil'
import { countState } from './atoms'
import Foo from './Foo'

function App() {
  const count = useRecoilValue(countState)

  return (
    <>
      <h1>Count: {count}</h1>
      <Foo />
    </>
  )
}

export default App
