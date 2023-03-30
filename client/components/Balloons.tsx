import balloons from '../../data/balloonData'
import Balloon from './Balloon'

function Balloons() {
  return (
    <div>
      {balloons.map((balloon) => (
        <Balloon key={balloon.id} {...balloon} />
      ))}
    </div>
  )
}

export default Balloons
