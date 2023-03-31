// import { useEffect } from 'react'
// import { useAppDispatch, useAppSelector } from '../hooks'
// import { fetchFruits } from '../slices/fruits'
import Balloons from './Balloons'
import MoneyDisplay from './MoneyDisplay'


function App() {
  // const fruits = useAppSelector((state) => state.fruits)
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchFruits())
  // }, [dispatch])

  return (
    <>

    {/* <div className='div-first' > */}
    <h1 className='bal-h1'>No Deal or Deal</h1>
      <div className="body-grid">
        <Balloons />
        <MoneyDisplay />
      </div>
      {/* </div> */}
    </>
  )
}

export default App
