import React from 'react'

export default function ColorBtn({ color, setColor, children }) {
  const className = `cb-container ${color}`

  const handleClick = () => {
    setColor(color)
    console.log(color)
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}
