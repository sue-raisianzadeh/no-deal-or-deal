import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchFruits } from '../slices/fruits'
import Game from './Game'
import Offer from './Offer'

function App() {
  const fruits = useAppSelector((state) => state.fruits)
  const dispatch = useAppDispatch()

  const activePage = useAppSelector((state) => state.activePage)

  // useEffect(() => {
  //   dispatch(fetchFruits())
  // }, [dispatch])

  return (
    <>
      <div className="app">
        {/* <img src="./images/balloon-icons/blue.jpeg" /> */}
        <h1>Fullstack Boilerplate - with Fruits!</h1>

        {activePage === 'game' ? <Game /> : <Offer />}
      </div>
    </>
  )
}

export default App
