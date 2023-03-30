import prizes from '../../data/prizeData'
import Money from './Money'

function MoneyDisplay() {
  return (
    <div className="money-grid">
      {prizes.map((prize) => (
        <Money key={prize.id} {...prize} />
      ))}
    </div>
  )
}

export default MoneyDisplay
