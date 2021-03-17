import React from 'react';

import './Buttons.css'

const Buttons = (  {content,color,onButtonClick}  ) =>{


    //checking Zero
    if(content == "0"){
        return <button className="Main-calc_button zero"
        onClick={onButtonClick(content)}
        >{content}</button>
    //Checking Color
    }else if(color == "orange"){
        return <button className="Main-calc_button orange"
        onClick={onButtonClick(content)}
        >{content}</button>
    }else if(color == "gray"){
        return <button className="Main-calc_button gray"
        onClick={onButtonClick(content)}
        >{content}</button>
    // Just rend
    }else{
        return <button className="Main-calc_button"
        onClick={onButtonClick(content)}
        >{content}</button>
    }
 
}

export default Buttons