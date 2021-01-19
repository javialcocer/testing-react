import React from 'react';

const Button = ({text, event}) => {
  return (
    <button className="bg-blue-500 text-white py-2 px-4 my-4 rounded-full focus:outline-none" onClick={event} >{text}</button>
  );
}

export default Button;
