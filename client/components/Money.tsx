interface Props {
  id: number
  amount: number
  isVisible: boolean
}

function Money(props: Props) {
  return (
    <div>
      <h2>{props.amount}</h2>
    </div>
  )
}

export default Money
