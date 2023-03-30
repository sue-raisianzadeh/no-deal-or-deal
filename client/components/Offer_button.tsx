import { navigate } from '../slices/activePage'
// import { useAppDispatch } from '../hooks'

import { useAppDispatch, useAppSelector } from '../hooks'

function Offer() {
  const dispatch = useAppDispatch()

  const activePage = useAppSelector((state) => state.activePage)

  function clickHandler(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    dispatch(navigate({ page: 'prize' }))
  }

  return (
    <>
      <p>Banker&apos;s Offer</p>
      <button onClick={clickHandler}>Prize</button>
    </>
  )
}

export default Offer
