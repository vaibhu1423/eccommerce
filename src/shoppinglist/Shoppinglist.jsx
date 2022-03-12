 import React,{useState} from 'react'
 
 export default function Shoppinglist() {
    const arr=[
        {
            product:"laptop",
            price:4000,
            select:false
        },
        { 
            product:"book",
            price:300,
            select:false
        },
        {
            product:"pen",
            price:200,
            select:false
        },
        {
            product:"bag",
            price:600,
            select:false
        },
        {
            product:"hp laptop",
            price:5000,
            select:false
        },
        {
            product:"asus",
            price:2000,
            select:false
        },
    ]
    const [index, setindex] = useState()
    const [state, setstate] = useState(arr)
    const [Total, setTotal] = useState(0);
    // console.log(...arr);
  const selectbox=(i)=>{
        setindex(i);
         
        setindex([...state,state[i].select=true]);
         
        // console.log(state);
        let mytotal=0;
        state.map((item)=>{
            if(item.select){
                 mytotal+=item.price;
            }
        })
        setTotal(mytotal);
    }
    const selectfalse=(i)=>{
        setindex([...state,state[i].select=false]);
        // console.log(state);
        let mytotal=Total;
         if(!state[i].select){
             mytotal-=state[i].price;
         }
        setTotal(mytotal);
    }
    return (
        <div className='container'>
            <ul className="list-item">
            {
                state.map((item,i)=>{
                    return(
                        <li  key={i} className='list-group-item d-flex justify-content-between' >
                            <div>
                             <input type="checkbox" name="" id={item.product}  className='form-check-input me-3'  onChange={(e)=>{
                                if(e.target.checked){
                                    selectbox(i);
                                }else{
                                    selectfalse(i);
                                }
                             }}  />
                             <label htmlFor={item.product} style={{cursor:"pointer"}}>{item.product}</label>                  
                        </div>
                            <div>
                                {item.price}
                            </div>
                        </li>
                    )
                })
            }
            <li className="list-group-item d-flex justify-content-between">
                <div>
                    <h3>Total</h3>
                </div>
                <div>  
                    <h1 className='text-success'>Rs: {Total}/-</h1>
                </div>
            </li>
            </ul>
        </div>
    )
 }
 