import React, { useRef } from 'react'
import { Button, Input } from '../../components'
import './styles.css'

function InputField({ onChange, onSubmit, todo }) {
    const inputRef = useRef(null)
    return (
        <form className='todo_add_form' onSubmit={(e) => {
            e.preventDefault()
            onSubmit(e)
            inputRef.current?.blur();
        }}>
            <Input
                className='todo_input'
                inputRef={inputRef}
                type='text'
                placeholder='Enter a task'
                value={todo.name}
                onChange={onChange}
            />
            <Button
                className='todo_add'
                name='Add'
                type='submit'
            />
        </form>
    )
}

export default InputField
