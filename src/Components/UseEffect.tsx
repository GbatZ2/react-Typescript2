import React,{useEffect,useState} from 'react'

export default function UseEffect() {
  
    const [value,setValue] = useState<number>(1);

    useEffect(()=>{
      const timer = window.setInterval(()=>{
        setValue(v=>v +1);
      },1000)

      return ()=> window.clearInterval(timer);
    },[])
    

  return (
    <div>

        <h2>Use Effect</h2>
        <div>
          {value}
        </div>

    </div>
  )
}

