interface Props {
  id: number
  amount: number
  isVisible: boolean
}

function Money(props: Props) {
  if (props.isVisible) {
    return (
      <div className="money-grid">
        <h2 className="money-h2">{`$` + props.amount}</h2>
      </div>
    )
  }

  return (
    <div className="money-grid">
      <h2 className="money-h2">-</h2>
    </div>
  )
}

export default Money
