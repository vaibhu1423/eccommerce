import React from "react";
function main (){
    // const text=" hello ";
    const myArray = ['apple', 'banana', 'orange'];
    function calculate(a, b) {
        const add = a + b;
        const subtract = a - b;
        const multiply = a * b;
        const divide = a / b;
      
        // return <h2>{add}</h2>
        return [add, subtract, multiply, divide];
      }
      
      const [add, subtract, multiply, divide] = calculate(10, 7);
   
     
    return(
        <div>

            {myArray.map((item)=>{
                 return <p>{item}</p>
             }) }
             <h2 >{add} <br /> {subtract} <br /> {multiply} <br /> {divide} <br /></h2> 
        </div>
        
       
       
    )
      
    // class Car {
    //     constructor(name) {
    //       this.brand = name;
    //     }
    //     present() {
    //        return 'I have a ' + this.brand;
    //     }
    //   }
      
    //   const mycar = new Car("Ford");
    //   mycar.present();      
}
export default main;