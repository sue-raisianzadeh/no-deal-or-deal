import balloons from '../../data/balloonData'
import Balloon from './Balloon'

function Balloons() {
  return (
    <div className="balloon-grid">
      {balloons.map((balloon) => (
        <Balloon key={balloon.id} {...balloon} />
      ))}
    </div>
  )
}

export default Balloons
