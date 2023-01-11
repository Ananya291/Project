import React from 'react'
import './Hello2.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement} from './DataSlice'

function Hello2() {
  const cakesCount = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  function decrement(){
    dispatch(decrement())
  }
  return (
    <div className='hello'>
      Hello2
      <Link to='/'>go home</Link>
      {/* <p>{cakesCount}</p>
      <button>one cake bought</button>
      <button onClick={()=>  dispatch(decrement())}>one cake sold</button> */}
    </div>
  )
}

export default Hello2