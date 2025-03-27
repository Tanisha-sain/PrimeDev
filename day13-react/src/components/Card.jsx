import React from 'react'

const cardStyle = {
  backgroundColor: "Yellow"
}
const Card = ({title, text}) => {
  return (
    <div key={title} style={cardStyle}>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default Card