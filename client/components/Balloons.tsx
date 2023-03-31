import { useAppSelector } from '../hooks'
import Balloon from './Balloon'

function Balloons() {
  const balloons = useAppSelector((state) => state.balloons)
  return (
    <div className="balloon-grid">
      {balloons.map((balloon) => (
        <Balloon key={balloon.id} {...balloon} />
      ))}
    </div>
  )
}

export default Balloons
