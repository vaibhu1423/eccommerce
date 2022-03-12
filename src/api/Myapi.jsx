import React, { useEffect,useState } from 'react'
import axios from 'axios';
export default function Myapi() { 
    const [state, setstate] = useState([]);
   useEffect(() => {
    const getdata=async()=>{
        // const data=await fetch("https://jsonplaceholder.typicode.com/users");
        // // console.log(data);
        // const xx=await data.json();
        // // console.log(xx);
        // setstate(xx);
        // console.log(state);
        const {data}=await axios.get("https://jsonplaceholder.typicode.com/users");
        setstate(data);
    }
        
    getdata();
   },[""])
    return (
        <div>
           <ul className="list-group">
           {
                state.map((item,i)=>{
                  return  <p className='list-group-item' key={i}> {i+1}{item.name} email: {item.email} address:{item.address.geo.lat}</p>
                })
            }
           </ul>
        </div>
    )
}
