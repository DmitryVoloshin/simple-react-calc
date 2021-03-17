import React, { useState } from 'react';
import Buttons from '../Buttons';

import './Calculator.css'


const Calculator = (  ) =>{


    const [result, setResult] = useState("0");
    const [store, setStore] = useState(null);
    const [operator, setOperator] = useState(null);
    const [memory,setMemory] = useState("0")

    const onButtonPress = (content) => ()=>{
        const num = parseFloat(result);

        if( content === "mc"){
            console.log('memory saved')
        }
        if (content === "AC") {
            setResult("0");
            setStore(null);
          setOperator(null);
          return;
        }
    
        if (content === "+/−") {
          setResult((num * -1).toString());
          return;
        }
    
        if (content === "%") {
            setResult((num / 100).toString());
            setStore(null);
          setOperator(null);
          return;
        }
    
        if (content === ".") {
          if (result.includes(".")) return;
    
          setResult(result + ".");
          return;
        }
    
        if (content === "+") {
          if (operator !== null) {
            if (operator === "+") {
                setStore(store + parseFloat(result));
            } else if (operator === "−") {
                setStore(store - parseFloat(result));
            } else if (operator === "×") {
                setStore(store * parseFloat(result));
            } else if (operator === "÷") {
                setStore(store / parseFloat(result));
            }
          } else {
            setStore(parseFloat(result));
          }
          setResult("0");
          setOperator("+");
          return;
        }

        if (content === "−") {
          if (operator !== null) {
            if (operator === "+") {
                setStore(store + parseFloat(result));
            } else if (operator === "−") {
                setStore(store - parseFloat(result));
            } else if (operator === "×") {
                setStore(store * parseFloat(result));
            } else if (operator === "÷") {
                setStore(store / parseFloat(result));
            }
          } else {
            setStore(parseFloat(result));
          }
          setResult("0");
          setOperator("−");
          return;
        }
        if (content === "×") {
          if (operator !== null) {
            if (operator === "+") {
                setStore(store + parseFloat(result));
            } else if (operator === "−") {
                setStore(store - parseFloat(result));
            } else if (operator === "×") {
                setStore(store * parseFloat(result));
            } else if (operator === "÷") {
                setStore(store / parseFloat(result));
            }
          } else {
            setStore(parseFloat(result));
          }
          setResult("0");
          setOperator("×");
          return;
        }
        if (content === "÷") {
          if (operator !== null) {
            if (operator === "+") {
                setStore(store + parseFloat(result));
            } else if (operator === "−") {
                setStore(store - parseFloat(result));
            } else if (operator === "×") {
                setStore(store * parseFloat(result));
            } else if (operator === "÷") {
                setStore(store / parseFloat(result));
            }
          } else {
            setStore(parseFloat(result));
          }
          setResult("0");
          setOperator("÷");
          return;
        }
    
        if (content === "=") {
          if (!operator) return;
    
          if (operator === "+") {
            setResult((store + parseFloat(result)).toString());
          } else if (operator === "−") {
            setResult((store - parseFloat(result)).toString());
          } else if (operator === "×") {
            setResult((store * parseFloat(result)).toString());
          } else if (operator === "÷") {
            setResult((store / parseFloat(result)).toString());
          }
          setStore(null);
          setOperator(null);
          return;
        }
    
        if (result[result.length - 1] === ".") {
        setResult(result + content);
        } else {
        setResult(parseFloat(num + content).toString());
        }
    };


    return(
        <div className="Calc-main_disp">
            
            <div className="Calc-disp_result">{result}</div>

            <div className="Calc-disp_buttons">
         
                <Buttons onButtonClick={onButtonPress} content="+/−"color="gray"/>
                <Buttons onButtonClick={onButtonPress} content="AC" color="gray"/>
                <Buttons onButtonClick={onButtonPress} content="%" color="gray"/>
                <Buttons onButtonClick={onButtonPress} content="÷" color="orange"/>

                <Buttons onButtonClick={onButtonPress} content="mc"/>
                <Buttons onButtonClick={onButtonPress} content="mr"/>
                <Buttons onButtonClick={onButtonPress} content="m-"/>
                <Buttons onButtonClick={onButtonPress} content="m+" color="orange"/>

                <Buttons onButtonClick={onButtonPress} content="7"/>
                <Buttons onButtonClick={onButtonPress} content="8"/>
                <Buttons onButtonClick={onButtonPress} content="9"/>
                <Buttons onButtonClick={onButtonPress} content="×" color="orange"/>

                <Buttons onButtonClick={onButtonPress} content="4"/>
                <Buttons onButtonClick={onButtonPress} content="5"/>
                <Buttons onButtonClick={onButtonPress} content="6"/>
                <Buttons onButtonClick={onButtonPress} content="−" color="orange"/>

                <Buttons onButtonClick={onButtonPress} content="1"/>
                <Buttons onButtonClick={onButtonPress} content="2"/>
                <Buttons onButtonClick={onButtonPress} content="3"/>
                <Buttons onButtonClick={onButtonPress} content="+" color="orange"/>

                <Buttons onButtonClick={onButtonPress} content="0"/>
                <Buttons onButtonClick={onButtonPress} content=","/>
                <Buttons onButtonClick={onButtonPress} content="=" color="orange"/>
            </div>

            <div>slash here</div>
        </div>
    )
}

export default Calculator
