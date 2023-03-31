import { useAppDispatch, useAppSelector } from '../hooks'
import { popBalloon } from '../slices/balloons'
import { revealPrize } from '../slices/prizes'
// import { selectBalloons } from '../slices/balloons'

interface Props {
  id: number
  img: string
  isVisible: boolean
}

function Balloon(props: Props) {
  const id = props.id
  const dispatch = useAppDispatch()

  function clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    dispatch(popBalloon(id))
    dispatch(revealPrize(id))
  }

  if (props.isVisible) {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <button onClick={clickHandler}>
        <img className="balloon" src={props.img} alt="" />
      </button>
    )
  }

  return (
    <img className="balloon" src="/images/balloon-icons/confetti.gif" alt="" />
  )
}

export default Balloon
