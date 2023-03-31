import { useAppSelector } from '../hooks'
import Balloon from './Balloon'

function Balloons() {
  const balloons = useAppSelector((state) => state.balloons)
  return (
    <div className="balloon-grid">
      {balloons.map((balloon) => (
        <button key={balloon.id}>
          <Balloon key={balloon.id} {...balloon} />
        </button>
      ))}
    </div>
  )
}

export default Balloons