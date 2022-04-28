import React, {useReducer} from 'react'

const initialState = {
    counter:100,
}
type ACTIONTYPES = 
 |   {   type:'INCREMENT';payload: number;   }
 |   {   type:'DECREMENT';payload: number;    }

 function counterReducer(state: typeof initialState,action: ACTIONTYPES){
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + action.payload
            }
        break;
        case 'DECREMENT':
            return{
                ...state,
                counter:state.counter - action.payload
            }
        default: 
           throw new Error('Bad Action')
    }
 }

export default function UseReducer() {
    const [state, dispatch] = useReducer(counterReducer, initialState)
  return (
   
    <div>
    <h2>UseReducer</h2>
    <div>


        <p>{state.counter}</p>

        <button onClick={()=>{
            dispatch(
              {  
                type:'INCREMENT',
                payload:6,
            }
            )
        }}>Increment</button>
        <button onClick={()=> dispatch(
              {  
                type:'DECREMENT',
                payload:3,
            }
            )}>Decrement</button>


    </div>


    </div>
    )
}
