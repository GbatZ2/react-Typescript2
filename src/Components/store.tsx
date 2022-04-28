import {createContext} from 'react';



const initialState = {
    first:"Carlos",
    last:"Zaragoza"
};



const context = createContext<typeof initialState>(initialState);

export default context;
export type userStateType = typeof initialState;