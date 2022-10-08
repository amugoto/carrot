import { useState, useCallback, useMemo, useEffect, useRef } from 'react'
import Bar from './Bar'

const colors = ['red', 'darkorchid', 'green', 'dodgerblue', 'dimgray', 'peru']
const ConsoleLog = (number, msg) => {
  console.log(
    `%cCase${number} %c${msg}`,
    `font-size: 1.2rem; font-weight:bold; color: ${colors[number - 1]}; `,
    `background: ${
      colors[number - 1]
    }; color: #fff; font-size: 1rem; padding: 2px 5px;`
  )
}

const testFn = () => {
  console.log('testFn Call')
  return '안녕하세요'
}

function Foo() {
  const [text, setText] = useState('')
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  const refTest = useRef(null)

  const handleKeyup = e => {
    setText(e.target.value)
  }

  useEffect(() => {
    ConsoleLog(
      1,
      '두 번째 인자 값에 아무것도 넣지 않으면 컴포넌트가 렌더링 될 때마다 useEffect 가 실행됩니다.'
    )
  })

  useEffect(() => {
    ConsoleLog(
      2,
      '두 번째 인자 값에 빈 배열을 넣게 되면 컴포넌트가 처음 렌더링 될 때만 useEffect 가 실행됩니다.'
    )
  }, [])

  useEffect(() => {
    ConsoleLog(
      3,
      `두 번째 인자 값에 값이 있는 배열을 넣게 되면 해당 값에 변동이 생기면 useEffect 가 실행됩니다. 배열에 여러값을 넣으면 그 중 1개라도 변동이 생기면 실행됩니다.`
    )

    return () => {
      ConsoleLog(
        6,
        `두 번째 인자 값이 빈 배열이 아닌데 값에 변동이 있으면 cleanup 함수가 해당 값이 변경 되기 전에 실행이 됩니다. count: ${count}`
      )
    }
  }, [count])

  const useMemoTest = useMemo(() => {
    return testFn()
  }, [text])

  const useCallbackTest = useCallback(() => {
    console.log('useCallback: ', count)
  }, [])

  const handleColorChange = () => {
    const num = Math.floor(Math.random() * (colors.length - 0 + 1)) + 0
    const fontColor = colors[num]
    refTest.current.style.color = fontColor
  }

  return (
    <>
      <h1 ref={refTest}>{text}</h1>
      <input type="text" placeholder="plz text" onKeyUp={handleKeyup} />

      <h1>Count: {count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        setCount
      </button>

      <div>
        {toggle && <Bar consoleFn={ConsoleLog} />}
        <button onClick={() => setToggle(!toggle)}>Bar Component Toggle</button>
      </div>
      {useMemoTest}

      <br />

      <button type="button" onClick={useCallbackTest}>
        useCallback
      </button>

      <br />

      <button type="button" onClick={handleColorChange}>
        useRef
      </button>
    </>
  )
}

export default Foo
