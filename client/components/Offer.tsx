
import { Prize } from '../../data/prizeData'
type Props = {
  prizes: Prize[]
}

function Offer({ prizes }: Props) {
  const visiblePrizes = prizes.filter((prize) => prize.isVisible)
  console.log(visiblePrizes)

  const average =
    visiblePrizes.reduce((total, next) => total + next.amount, 0) /
    visiblePrizes.length

  console.log(average)

  return (
    <>
      <h2>{average}</h2>
    </>
  )
}

export default Offer

