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
    
        // Simple Operation
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

        //Operation with memory
        if( content === "mc"){
            setMemory(num)
        }
        if(content === "mr"){
          return setResult(memory)
        }
        if(content === "m-"){
         return setResult(memory - num)
        }
        if(content === "m+"){
            console.log("HOA +15")
            return setResult(memory + num)
        }

    
    
        // Math Operations
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

    const symb = ['+/−','AC','%','÷','mc','mr',
    'm-','m+','7','8','9','×','4','5','6','−','1',
    '2','3','+','0','.','=']
    return(
        <div className="Calc-main_disp">
            <div className="Calc-disp_result">{result}</div>
            <div className="Calc-disp_buttons">
            {
                symb.map((content) =>{
                    return <Buttons onButtonClick={onButtonPress}
                    content={content}></Buttons>
                })
            }
                {/* <Buttons onButtonClick={onButtonPress} content="+/−"color="gray"/>
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
                <Buttons onButtonClick={onButtonPress} content="."/>
                <Buttons onButtonClick={onButtonPress} content="=" color="orange"/> */}
            </div>
            <div className="Calc-bottom_dash"></div>
        </div>
    )
}

export default Calculator
