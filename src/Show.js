import { useSelector } from "react-redux";
import React from 'react'

const Show=(props)=>{

    const count=useSelector((state)=>{
        return state.count
    })

    return (
        <div>
            <h2>component</h2>
            <h3>count-{count}</h3>
        </div>
    )
}

export default Show