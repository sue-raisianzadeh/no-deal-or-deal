import { navigate } from '../slices/activePage'
import { useAppDispatch } from '../hooks'

function Prize() {
  const dispatch = useAppDispatch()
  function handleClick() {
    dispatch(navigate({ page: 'game' }))
  }

  return (
    <>
      <p>Congratulations, you&apos;ve just won lots of money!</p>
      <button onClick={handleClick}>Balloons</button>
    </>
  )
}

export default Prize
