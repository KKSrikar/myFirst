import React,{useState,useEffect} from "react";

export default function Counter(){
    const [count,setCount] = useState(0);
    useEffect(()=>{document.title=`you clicked ${count} times`});
    return (
        <div>
            <p>you clicked me {count} times</p>
            <button onClick={()=> setCount(count+1)}>Click me</button>
            <button onClick={()=> setCount(count-1)}>Bite me</button>
            <button onClick={()=> setCount(0)}>Clear me</button>

        </div>
    )
}