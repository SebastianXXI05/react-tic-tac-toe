import React from 'react'

const Box = (props) => {
  return (
    <div 
      className='box'
      onClick={() => {
        props.text.length === 0 ? props.handle(props.pos, props.letter) : null
      }}
    >
      <h2>{props.text}</h2>
    </div>
  )
}

export default Box
