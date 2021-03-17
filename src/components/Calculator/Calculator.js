import React from 'react';
import Buttons from '../Buttons';

import './Calculator.css'


const Calculator = ( ) =>{
    return(
        <div className="Calc-main_disp">
            
            <div className="Calc-disp_result">0</div>

            <div className="Calc-disp_buttons">
            
                <Buttons content="AC" color="gray"/>
                <Buttons content="+/−"color="gray"/>
                <Buttons content="%" color="gray"/>
                <Buttons content="÷" color="orange"/>

                <Buttons content="mc"/>
                <Buttons content="mr"/>
                <Buttons content="m-"/>
                <Buttons content="m+" color="orange"/>

                <Buttons content="7"/>
                <Buttons content="8"/>
                <Buttons content="9"/>
                <Buttons content="×" color="orange"/>

                <Buttons content="4"/>
                <Buttons content="5"/>
                <Buttons content="6"/>
                <Buttons content="-" color="orange"/>

                <Buttons content="1"/>
                <Buttons content="2"/>
                <Buttons content="3"/>
                <Buttons content="+" color="orange"/>

                <Buttons content="0"/>
                <Buttons content=","/>
                <Buttons content="=" color="orange"/>
            </div>

            <div>slash here</div>
        </div>
    )
}

export default Calculator
