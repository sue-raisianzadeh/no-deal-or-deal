// import { useEffect } from 'react'
// import { useAppDispatch, useAppSelector } from '../hooks'
// import { fetchFruits } from '../slices/fruits'
import MoneyDisplay from './MoneyDisplay'
import { useAppSelector } from '../hooks'

import Game from './Game'
import Prize from './Prize'
import Offer from './Offer'
import Balloons from './Balloons'
import activePage from '../slices/activePage'

function App() {
  // const fruits = useAppSelector((state) => state.fruits)
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchFruits())
  // }, [dispatch])

  const prizes = useAppSelector((state) => state.prizes)

  return (
    <>
      {activePage === 'game' ? <Game /> : <Prize />}

      <div className="div-first">
        <h1 className="bal-h1">No Deal or Deal</h1>
        <div className="body-grid">
          <Balloons />
          <MoneyDisplay />
          <Offer prizes={prizes} />
        </div>
      </div>
    </>
  )
}

export default App
