import React,{useState,useEffect} from 'react'

export default function MyEffect() {
    const [state, setstate] = useState(true);
    const [demo, setdemo] = useState("asdfasdf")
    const toggle=()=>{
        state?setstate(false):setstate(true)
    }
    useEffect(() => {
        console.log("xxxxx");
    }, [state])
    return (
        <div>
            <button className="btn" onClick={toggle}>Call</button>
            <button onClick={()=>{setstate("dell")}}>call</button>
        </div>
    )
}
