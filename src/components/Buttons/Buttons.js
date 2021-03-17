import React from 'react';

import './Buttons.css'

const Buttons = (  {content,color}  ) =>{
    //checking Zero
    if(content == "0" || content == "zero"){
        return <button className="Main-calc_button zero"
        >{content}</button>
    //Checking Color
    }else if(color == "orange"){
        return <button className="Main-calc_button orange"
        >{content}</button>
    }else if(color == "gray"){
        return <button className="Main-calc_button gray"
        >{content}</button>
    // Just rend
    }else{
        return <button className="Main-calc_button"
        >{content}</button>
    }
 
}

export default Buttons