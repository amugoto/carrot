import { useDispatch, useSelector } from 'react-redux'
import { add, minus, update } from '../store/countSlice'

function useCount() {
  const count = useSelector(store => store.count.count)
  const dispatch = useDispatch()

  return {
    count,
    minus() {
      dispatch(minus())
    },
    add() {
      dispatch(add())
    },
    update(num) {
      dispatch(update(num))
    }
  }
}

export default useCount
