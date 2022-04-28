import React,{useRef} from 'react'

export default function UseRef() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  
    return (
    <div>
        <h2>UseRef</h2>
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    </div>
  )
}
