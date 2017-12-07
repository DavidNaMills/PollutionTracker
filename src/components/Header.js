// import '../styles/header.css';
import React from 'react';


export default ({message, size})=>{
    let head;
    switch(size){
        case 1: return head = (<h1>{message}</h1>);
        case 2: return head = (<h2>{message}</h2>);
        case 3: return head = (<h3>{message}</h3>);
        case 4: return head = (<h4>{message}</h4>);
        case 5: return head = (<h5>{message}</h5>);
        case 6: return head = (<h6>{message}</h6>);
        default: return head = (<h6>{message}</h6>);
    }

    return (
        <div>
            {head}
        </div>
    )
};

//