import React,{useState} from 'react'

export default function Todo() {
    const [state, setstate] = useState([]);
    const [todo, settodo] = useState("");
    const addtodo=()=>{
        setstate([...state,todo]);
        console.log(state);
        // console.log(todo);
    }
      
    return (
        <div>
             <div className="container mt-3">
                 <div className="row">
                     <div className="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
                         <div className="card">
                             <div className="card-header">
                                 <h3 className="text-center text-primary">Todo list</h3>
                             </div>
                             <div className="card-body">
                                 <input type="text" className='form-control ' onChange={(e)=>settodo(e.target.value)} placeholder='Enter your todo here...' /> <br />
                                 <button className="btn btn-primary w-100" onClick={addtodo}>Add todo</button>
                             </div>
                         </div>
                 <ul className="list-group ">
                     {
                         state.map((item,i)=> <li className='list-group-item d-flex justify-content-between align-items-center'>
                             <div>
                                <span className='mx-3'> {i+1}</span>
                                 {item}
                             </div>
                             <div className='btn-group'>
                                 <button className="btn btn-outline-success"><i class="fa fa-edit" aria-hidden="true"></i></button>
                                 <button className="btn btn-outline-danger" onClick={(e)=>{setstate(state.slice(i,i))}}><i class="fa fa-trash" aria-hidden="true">{i}</i></button>
                             </div>
                         </li>)
                     }
                 </ul>
                     </div>
                 </div>
             </div>
         </div>
    )
}
