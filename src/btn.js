import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from './actions/countActions'

const Btn=(props)=>{

const dispatch=useDispatch()

    return <button onClick={()=>{
        dispatch(increment())
    }}>+1 from comppnent</button>
}

export default Btn