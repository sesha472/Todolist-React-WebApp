import React,{useState} from 'react';

function Cal(props) {
    const [num1, setnum1] = useState("");
    const [num2, setnum2] = useState("");
    
    
    
    return (
        <div>
            <h1>this is calculator</h1>
           
                <input stype="text" onChange={(event)=>setnum1(parseInt(event.target.value))} placeholder="enter number" />
                <input stype="text" onChange={(event)=>setnum2( parseInt(event.target.value))} placeholder="enter number" />
                
                <h1>add:{num1+num2} </h1>
                <h1>mul:{num1*num2} </h1>
            
            
        </div>
    )
}

export default Cal;
