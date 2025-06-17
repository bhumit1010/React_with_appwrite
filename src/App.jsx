import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import  {xyz} from './fetures/slice'
function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      
    </div>
  )
}

export default App
