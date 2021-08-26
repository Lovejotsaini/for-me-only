import {useDispatch, useSelector} from 'react-redux'
import {increment} from './actions/countActions'
import Btn from './btn'
import Show from './Show'

function App() {
  const count=useSelector((state)=>{
    return state.count
  })

  const dispatch=useDispatch()
  return (
    <div>
      <h1>Redux-trainig</h1>
      <h2>count-{count}</h2>
      <button onClick={()=>{
        dispatch(increment())
      }}>+1</button>

      <Btn/>
      <Show/>
    </div>
  );
}

export default App;
