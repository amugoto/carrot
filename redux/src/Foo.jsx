import useCount from './hooks/count'

function Foo() {
  const { add, minus, update } = useCount()

  const handleClick = fn => e => {
    e.preventDefault()
    fn()
  }

  const handleKeyup = e => {
    const inputValue = e.target.value
    update(inputValue)
  }

  return (
    <section>
      <button type="button" onClick={handleClick(add)}>
        Plus
      </button>
      <button type="button" onClick={handleClick(minus)}>
        Minus
      </button>
      <input type="text" placeholder="Update Number" onKeyUp={handleKeyup} />
    </section>
  )
}

export default Foo
