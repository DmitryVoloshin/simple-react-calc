import React from 'react';
import Buttons from '../Buttons';

import './Calculator.css'


const Calculator = ( ) =>{
    return(
        <div className="Calc-main_disp">
            
            <div className="Calc-disp_result">0</div>

            <div className="Calc-disp_buttons">
            
                <Buttons content="AC"/>
            </div>
        </div>
    )
}

export default Calculator
