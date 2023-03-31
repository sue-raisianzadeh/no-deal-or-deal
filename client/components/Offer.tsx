import { navigate } from '../slices/activePage'
import { useAppDispatch, useAppSelector } from '../hooks'

import { Prize } from '../../data/prizeData'

type Props = {
  prizes: Prize[]
}

function Offer({ prizes }: Props) {
  const dispatch = useAppDispatch()

  const activePage = useAppSelector((state) => state.activePage)

  function clickHandler(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    dispatch(navigate({ page: 'prize' }))
  }

  const visiblePrizes = prizes.filter((prize) => prize.isVisible)
  console.log(visiblePrizes)

  const average =
    visiblePrizes.reduce((total, next) => total + next.amount, 0) /
    visiblePrizes.length

  console.log(average)

  return (
    <>
      <p>Banker&apos;s Offer:</p>

      <h2>${average}</h2>
      <button onClick={clickHandler}>Prize</button>
    </>
  )
}

export default Offer
