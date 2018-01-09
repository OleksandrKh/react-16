import React from 'react';
import './Person.css'

const perosn = (props) => {
  return (
    <div className='Person'>
      <p>I'm {props.name} and I'm {props.age} years old!</p>
      <p onClick={props.click}>{props.children}</p>
      <input
        type='text'
        onChange={props.changed}
        value={props.name}/>
    </div>
  )
}

export default perosn;
