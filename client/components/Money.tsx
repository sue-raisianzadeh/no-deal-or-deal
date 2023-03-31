interface Props {
  id: number
  amount: number
  isVisible: boolean
}

function Money(props: Props) {
  return (
    <div className="money-grid">
      <h2 className="money-h2">{props.amount}</h2>
    </div>
  )
}

export default Money
