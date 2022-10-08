import { useEffect } from 'react'

function Bar({ consoleFn }) {
  useEffect(() => {
    consoleFn(4, 'Bar 컴포넌트 등장!!')
    return () => {
      consoleFn(
        5,
        'Bar 컴포넌트 퇴장!! 두 번째 인자 값이 빈 배열인 경우 컴포넌트가 언마운트 될 때 실행됩니다. '
      )
    }
  }, [])

  return <p>Bar Component</p>
}

export default Bar
