import React,{useState,useEffect} from 'react'

export interface RootObject {
  
    name: string,
    producerName: string ,
    beverageName:string,
    beverageColor: string,
    beverageStyle: string,
    producerLocation: string,
    abv: number,
    ibu: number,
    logo: string,
    level: number
  
}

export default function UseFetch(url:string) {
  
  
 const [data, setData] = useState<RootObject[]|null>(null);   
 const [done, setDone] = useState<boolean>(false);   
  
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())  
        .then((dt:RootObject[]) =>{
          setData(dt);
          setDone(true);
        })   
       
    },[url]);


    return {
           data,
           done
  }

}

