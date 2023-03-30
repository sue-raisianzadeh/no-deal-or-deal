import { useState } from 'react'

function Game() {
  const [show, setShow] = useState(true)

  function changeState() {
    setShow(!show)
  }

  return (
    <div>
      <div>
        <h1>Ballons</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <button onClick={changeState}>1</button>
              </td>
              <td>
                <button>2</button>
              </td>
              <td>
                <button>3</button>
              </td>
            </tr>
            <tr>
              <td>
                <button>4</button>
              </td>
              <td>
                <button>5</button>
              </td>
              <td>
                <button>6</button>
              </td>
            </tr>
            <tr>
              <td>
                <button>7</button>
              </td>
              <td>
                <button>8</button>
              </td>
              <td>
                <button>9</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Game
