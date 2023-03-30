import { navigate } from '../slices/activePage'
import { useAppDispatch } from '../hooks'


function Offer() {
  const dispatch = useAppDispatch()
  function handleClick() {
    dispatch(navigate({ page: 'game' }))
  }

  return (
    <>
      <button onClick={handleClick}>BaLLoons</button>
    </>
  )
}

export default Offer
