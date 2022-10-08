import { useContext } from 'react'

function Foo({ context }) {
  const [count, setCount] = useContext(context)

  const handleCount = value => e => {
    e.preventDefault()
    setCount(count + value)
  }

  const handleKeyup = e => {
    const value = e.target.value
    setCount(!value || isNaN(value) ? count : Number(value))
  }

  return (
    <section>
      <button type="button" onClick={handleCount(1)}>
        Plus
      </button>
      <button type="button" onClick={handleCount(-1)}>
        Minus
      </button>
      <input type="text" placeholder="Update Number" onKeyUp={handleKeyup} />
    </section>
  )
}

export default Foo
