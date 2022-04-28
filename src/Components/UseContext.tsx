import {useContext,useState} from 'react'
import ContextChild from './ContextChild';
import context,{userStateType} from './store'
function UseContext (){
    
    const [user , setUser] = useState<userStateType>({
        first:"Carlao",
        last:"Zaragoza",
    });

    return(
        <div>
            <h2>useContext</h2>
            <div>
                <context.Provider value={user}>
                    <ContextChild/>
                    <button onClick={()=>
                        setUser({
                            first:"Zaragoza",
                            last:"Carlao"
                        })
                    }>Change User</button>
                </context.Provider>
            </div>
        </div>
    );
}
export default UseContext;