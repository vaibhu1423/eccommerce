import React,{useState,useEffect} from 'react'

export default function Mymultistate() {
    const [todo, settodo] = useState([])
    const [state, setstate] = useState({
        task:"",
        desc:"",
        pririty:""
    })
    const addtodo=()=>{
        settodo([...todo,state]);
    }
    useEffect(() => {
        console.log(todo);
    }, [todo])
    return (
        <div >
          <div className="container">
          <div className="card col-6 mx-auto p-2">
              <div className="card-header">
                  <h3 className="fw-bolder text-center text-success">Todo List</h3>
              </div> <br />
           <input type="text" className='form-control' placeholder='enter your task name' onChange={(e)=>setstate({...state,task:e.target.value})} /> <br />
            <textarea className='form-control' placeholder='enter your description' onChange={(e)=>setstate({...state,desc:e.target.value})}></textarea> <br />
            <select className='form-control' name="" id="" onChange={(e)=>setstate({...state,pririty:e.target.value})}> 
                <option >select the priority</option>
                <option value="high">high</option>
                <option value="mid">mid</option>
                <option value="low">low</option>
            </select> <br />
            <button className='btn btn-warning ' onClick={addtodo}>Add todo</button>
            <div className="card-body">
               <ul className='list-group'>
               {
                    todo.map((item,i)=>{
                        return (
                            
                            <li key={i}   className="list-group-item" style={{cursor: "pointer"}}>
                               <div className="d-flex justify-content-between align-items-center" data-bs-toggle="collapse" data-bs-target={"#card" + i}>
                               <div>
                                {item.task}
                                </div>
                                <div className="btn-group">
                                    <button className="btn btn-outline-success"><i className="fa fa-edit" aria-hidden="true"></i></button>
                                    <button className="btn btn-outline-danger" onClick={(e)=>{
                                        const data=[...todo];
                                        // console.log(data);
                                        data.splice(i,i+1);
                                        console.log(data);
                                        settodo(data);
                                    }}><i className="fa fa-trash" aria-hidden="true"></i></button>
                                </div>
                               </div>
                               <div id={"card" + i} className='collapse'>
                                <p className=''>{item.desc}</p>
                               </div>
                            </li>
                        )
                    })
                }
               </ul>
            </div>
           </div>
          </div>
        </div>
    )
}
