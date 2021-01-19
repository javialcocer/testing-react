import React from 'react';

const Operator = ({items, event}) => {
    const elements = items.map((item,index)=>{
        return(
            <option key={index} value={item.operator}>{item.text}</option>
        )
    })
  return (
    <select className="mx-auto px-2 h-10 border border-blue-500 focus:outline-none text-center" onChange={(e) => event(e.target.value)} >
        {elements}
    </select>
  );
}

export default Operator;
