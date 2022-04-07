import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
                      
    <p>Name: {props.character.name}</p>
    <p>Gender: {props.character.gender}</p>
    <p>color of hair: {props.character.hair_color}</p>
    <p>height: {props.character.height}</p>
  </div>
  )
}

export default Card