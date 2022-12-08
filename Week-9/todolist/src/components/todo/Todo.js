import React, { useEffect, useRef, useState } from 'react'
import './styles.css';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { VscDebugStart } from 'react-icons/vsc'
import { SiTodoist } from 'react-icons/si'
import { TODOSTATUS_DONE, TODOSTATUS_INPROGRESS, TODOSTATUS_TODO } from '../../constants/todoStatus';
import { Input } from '../input';
import { Draggable } from 'react-beautiful-dnd';

function Todo({ content, handleTodoAction, index }) {
    const [editMode, setEditMode] = useState(false);
    const [editText, setEditText] = useState(content.name);
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [editMode])
    const handleEditChange = (event) => {
        setEditText(event.target.value)
    }
    return (
        <Draggable draggableId={content.id.toString()} index={index}>
            {
                (provided) => (
                    <form className='todo_item'
                        onSubmit={(e) => {
                            e.preventDefault();
                            setEditMode(false)
                            handleTodoAction("edit", content, editText)
                        }}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {
                            editMode ?
                                <Input type="text"
                                    className={"todo_edit"}
                                    value={editText}
                                    onChange={handleEditChange}
                                    inputRef={inputRef}
                                />
                                : <div className='todo_text'>{content?.name}</div>
                        }
                        <div className='icon'
                            onClick={() => setEditMode(!editMode)}
                        >
                            <AiFillEdit />
                        </div>
                        <div className='icon'
                            onClick={() => handleTodoAction("delete", content)}
                        >
                            <AiFillDelete />
                        </div>
                        {
                            content.status !== TODOSTATUS_DONE && content.status !== TODOSTATUS_INPROGRESS ?
                                <div className='icon'
                                    onClick={() => handleTodoAction("start", content)}
                                >
                                    <VscDebugStart />
                                </div>
                                : null
                        }
                        {
                            content.status !== TODOSTATUS_TODO ?
                                <div className='icon'
                                    onClick={() => handleTodoAction("todo", content)}
                                >
                                    <SiTodoist />
                                </div>
                                : null
                        }
                        {
                            content.status !== TODOSTATUS_DONE ?
                                <div className='icon'
                                    onClick={() => handleTodoAction("done", content)}
                                >
                                    <MdDone />
                                </div>
                                : null
                        }
                    </form>
                )
            }
        </Draggable>
    )
}

export default Todo
