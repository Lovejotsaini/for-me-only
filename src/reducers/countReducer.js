const countInitialState=0
const countReducer=(state=countInitialState,action)=>{
    if(action.type==='INCREMENT'){
        return state + 1
    } else if (action.type === 'DECREMENT'){
        return state - 1
    } else if (action.type === 'INCREMENT_BY'){
        return state + action.payload
    }else{
        return state
    }

}

export default countReducer