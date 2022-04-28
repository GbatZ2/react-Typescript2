import React,{useContext} from 'react'
import context from './store'


export default function ContextChild() {

    const user = useContext(context);

  return (
        <>
            <div>
                <p>First Name: {user.first}</p>
                <p>Last Name: {user.last}</p>
            </div>
        </>
  );
}
