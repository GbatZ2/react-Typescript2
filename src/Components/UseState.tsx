import React,{useState} from 'react'



export default function UseState() {

    const [arr, setArr] = useState<number[]>([]);
    const [name,setName] = useState<string | null>(null);
    return (
    <div>
        <h2>UseState</h2>

        <div className="array">
            <button onClick={()=>setArr([...arr,arr.length + 1,])}>
                Add to array
            </button>
             {JSON.stringify(arr)}

            <button onClick={()=>setName("Carlao")}>
                 Set name
            </button>
             {JSON.stringify(name)}
        </div>
    </div>
  )
}
