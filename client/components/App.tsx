// import { useEffect } from 'react'
// import { useAppDispatch, useAppSelector } from '../hooks'
// import { fetchFruits } from '../slices/fruits'
import Balloons from './Balloons'
import MoneyDisplay from './MoneyDisplay'


import Game from './Game'
import Prize from './Prize'
import Offer from './Offer'
import prizes from '../../data/prizeData'
import Balloons from './Balloons'


function App() {
  // const fruits = useAppSelector((state) => state.fruits)
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchFruits())
  // }, [dispatch])

  return (
    <>


        {activePage === 'game' ? <Game /> : <Prize />}
        <Balloons />
        <Offer prizes={prizes} />
    <div className='div-first' >
    <h1 className='bal-h1'>No Deal or Deal</h1>
      <div className="body-grid">
        <Balloons />
        <MoneyDisplay />
      </div>

      </div>
    </>
  )
}

export default App
