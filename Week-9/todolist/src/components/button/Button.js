import React from 'react'

function Button({ onClick, name, className, type }) {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
    >
      {name}
    </button>
  )
}

export default Button
