import React from 'react';

import './Buttons.css'

const Buttons = (  {content,onButtonClick}  ) =>{


    switch(content){
        case "0" :
            return  <button className="Main-calc_button zero"
                        onClick={onButtonClick(content)}
            >{content}</button>;
        case "+/−" || "AC" || "%" :
            return <button className="Main-calc_button orange"
                         onClick={onButtonClick(content)}
            >{content}</button>
        case "÷" || "m+" || "×" || "−" || "+" || "=" :
            return <button className="Main-calc_button gray"
                        onClick={onButtonClick(content)}
            >{content}</button>
        default:
             return <button className="Main-calc_button"
                        onClick={onButtonClick(content)}
            >{content}</button>
    }   
 
}

export default Buttons