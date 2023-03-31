import balloons from '../../data/balloonData'
import Balloon from './Balloon'

function Balloons() {
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