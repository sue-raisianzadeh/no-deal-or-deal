import prizes from '../../data/prizeData'
import { useAppSelector } from '../hooks'
import Money from './Money'

function MoneyDisplay() {
  const prizes = useAppSelector((state) => state.prizes)
  return (
    <div className="money-grid">
      {prizes.map((prize) => (
        <Money key={prize.id} {...prize} />
      ))}
    </div>
  )
}

export default MoneyDisplay
