import React, { useState } from 'react'
//useState ----->Hook
//states -->init--->this.state
//manipualate state--->this.setState

let PropConcept=(p)=>{

    const[count]=useState(["jayasree1 ","ramya"]);
    const[count1,count2]=useState(0);


    return(
        <div style={{color:"blue"}}>
            <h2>PropConcept not state using functional</h2>
    <h2>{count.map(i=>
        (
            <span>{i} <br/></span>
        ))}</h2>
        <h2>{p.name} is {p.age} years old</h2>
        <h2>{count1}</h2>
        <button onClick={()=>{count2(count1+1)}}>increase</button>
        <button onClick={()=>{count2(count1-1)}}>decrease</button>

        </div>
    )
}


export default PropConcept;
   