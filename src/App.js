import React, { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import Operator from './components/Operator/Operator';
import {add, substrac, multiply, divide} from './helpers/app';

const App = () => {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [operatorNumber, setOperatorNumber] = useState('+')
  const [total, setTotal] = useState(0.0)

  const operators = [
    {
      "text":"+",
      "operator":"+"
    },
    {
      "text":"-",
      "operator":"-"
    },
    {
      "text":"*",
      "operator":"*"
    },
    {
      "text":"/",
      "operator":"/"
    }
  ]

  useEffect(() =>{
    console.log(operatorNumber)
  },[operatorNumber])
  const handlerOperation = () => {
    switch (operatorNumber) {
      case '+':
        setTotal(add(firstNumber,secondNumber))
        break;
      case '-':
        setTotal(substrac(firstNumber,secondNumber))
        break;
      case '*':
        setTotal(multiply(firstNumber,secondNumber))
        break;
      case '/':
        setTotal(divide(firstNumber,secondNumber))
        break;
        
        default:
          setTotal(0)
          break;

    }
  }

  return (
    <div className="flex items-center h-full">
        <div className="flex flex-col w-3/12 mx-auto">
          <input type="number" id="firstNumber" value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)} className="border border-blue-500 my-4 h-10 text-center focus:outline-none" />  
          <Operator items={operators} event={setOperatorNumber} />
          <input type="number" id="secondNumber" value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)} className="border border-blue-500 my-4 h-10 text-center focus:outline-none" />
          <Button text="=" event={handlerOperation} />
          <h3>Total: <span>{total}</span></h3> 
        </div>
    </div>
  );
}

export default App;

