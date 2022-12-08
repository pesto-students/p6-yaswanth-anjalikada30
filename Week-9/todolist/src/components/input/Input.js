import React from 'react'

function Input({ onChange, placeholder, className, value, type, inputRef }) {
    return (
        <input
            className={className}
            ref={inputRef}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

export default Input
