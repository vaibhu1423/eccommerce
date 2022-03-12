import React, { useEffect, useState } from 'react'

export default function Guessthenumber() {
    const gamearr=[
        {
            id:1,
            range:"0-5",
            level:"Low",
            chance:3
        },
        {
            id:2,
            range:"5-10",
            level:"Mid",
            chance:3
        },
        {
            id:3,
            range:"10-15",
            level:"High",
            chance:5
        },
        {
            id:4,
            range:"15-20",
            level:"Pro",
            chance:3
        },
        {
            id:5,
            range:"20-25",
            level:"Ultra Pro",
            chance:2
        },
    ]
    const operatorarr=["+","-","*"];
    const [Level, setLevel] = useState(1);
    const [state, setstate] = useState([...gamearr]);
    const [firstnumber, setfirstnumber] = useState(2);
    const [secondnumber, setsecondnumber] = useState(2);
    const [uservalue, setuservalue] = useState(0);
    const [setclass, setsetclass] = useState("");
    const [operator, setoperator] = useState("");
    const [container, setcontainer] = useState("alert-danger");
    const setthetime=(max,min,color,data)=>{
        setfirstnumber(Math.floor(Math.random() * (max - min) + min));
        setsecondnumber(Math.floor(Math.random() * (max - min) + min));
        setcontainer(color);
    setoperator(data);
    }
    useEffect(() => {
        setfirstnumber(Math.floor(Math.random() * 5));
        setsecondnumber(Math.floor(Math.random() * 5));
        setoperator(operatorarr[Math.floor(Math.random() * 3)]);
      
        if(Level==2){
            console.log("level number"+Level);
            setfirstnumber(Math.floor(Math.random() * (10 - 5) + 5));
            setsecondnumber(Math.floor(Math.random() * (10 - 5) + 5));
            setcontainer("alert-secondary");
        setoperator(operatorarr[Math.floor(Math.random() * 3)]);
        }
        if(Level==3){
            console.log("level number"+Level);
            setfirstnumber(Math.floor(Math.random() * (15 - 10) + 10));
            setsecondnumber(Math.floor(Math.random() * (15 - 10) + 10));
            setcontainer("alert-primary");
            setoperator(operatorarr[Math.floor(Math.random() * 3)]); 
        }
        if(Level==4){
            console.log("level number"+Level);
            setfirstnumber(Math.floor(Math.random() * (20 - 15) + 15));
        setsecondnumber(Math.floor(Math.random() * (20 - 15) + 15));
        setoperator(operatorarr[Math.floor(Math.random() * 3)]);
        setcontainer("alert-warning");
        }
        if(Level==5){
            console.log("level number"+Level);
            setfirstnumber(Math.floor(Math.random() * (25 - 20) + 20));
        setsecondnumber(Math.floor(Math.random() * (25 - 20) + 20));
        setoperator(operatorarr[Math.floor(Math.random() * 3)]);
        setcontainer("alert-info");
        }
    }, [Level]);
    function submitByuser(e){
        e.preventDefault();
        console.log("yes in");
        // localStorage.setItem("yesin","yes this in");
        let answer=`${firstnumber} ${operator} ${secondnumber}`;
        const realanswer=eval(answer);
        setuservalue(e.target.value);
        if(e.target.value==realanswer){
            setLevel((pre)=>pre+1);
            console.log("true state",state);
        }else{
            setstate([...state,state[Level-1].chance-=1]);
            console.log("false state",state);
        } 
    }
    return (
        <div className='container p-5'>
            <div className="row">
                <div className="col-md-8 col-sm-10 col-12 mx-auto">
                   {
                       state.map((item,i)=>{
                           if(item.id===Level){
                               return(
                                <div className={`container alert ${container}`} key={i}>
                                <h4 className=" text-center fst-italic display-5 ">Guess the Number 🔍</h4>
                                <div className="card-body border-0 mx-5">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h4>Range</h4>
                                            <p className='text-center'>{item.range}</p>
                                        </div>
                                        <div>
                                            <h4>Level</h4>
                                            <p className='text-center'>{item.level}</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h4>Level no</h4>
                                            <p className='text-center display-6'>{i+1}</p>
                                        </div>
                                        <div>
                                            <h4>Chance</h4>
                                            <p className='text-center display-6'>{item.chance}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer d-flex  flex-column align-items-center">
                                    <div className='display-2 text-center'>
                                        <span className='me-5'>{firstnumber}</span>
                                        <span className='mx-3'>{operator}</span>
                                        <span className='ms-5'>{secondnumber}</span>
                                    </div>
                                    <div className=''>
                                   <form >
                                   <input type="number" className={"form-control form-control-lg text-center "+{setclass}} onChange={(e)=>{
                                        submitByuser(e);
                                    }}  placeholder='Enter your guess value'/>
                                    <p className="text-center my-3">Enter the <span className='text-primary'>enter</span> button to select the value</p>
                                   </form>
                                    </div>
                                </div>
                            </div>
                               )
                           }
                       })
                   }
                </div>
            </div>
        </div>
    )
}
