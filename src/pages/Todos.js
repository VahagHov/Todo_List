import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { updateTodo } from '../redux/todoSlice'
import { onDelete } from '../redux/todoSlice'

export const Todos = () => {
  const {date} = useParams()
  const dispatch = useDispatch();
  const todos = useSelector(({todos}) => todos[date])

  const [editMode , setEditMode] = useState(false)
  const [editValue, setEditValue] = useState('');
  const [editId, setEditID] = useState('');

  const handleEdit = (todoId) => () => {
    const {description} = todos.find(({id}) => id === todoId)

    setEditID(todoId)
    setEditValue(description)
    setEditMode(true)
  }

  // const handleDelete = () => () => {
  //   dispatch(onDelete({date,id}))
  // }

  const handleEditChange = (e) => {
    setEditValue(e.target.value)
  }

  const handleConfirm = () => {
    dispatch(updateTodo({date , description: editValue , id: editId}))
    setEditMode(false)
  }
  return (
    <>
      <div>
        <Link to="/">Back</Link>
        
        {todos?.map(({id , description , completed}) => {
            return (  
                <ul key={id}>
                    <li>
                              <input type="checkbox" checked = {completed} onChange= ''/>
                              description: {description}
                               <button onClick={handleEdit(id)}>Edit</button>
                               <button onClick={() => dispatch(onDelete(date,id))}>Delete</button>
                    </li>
                </ul>  
            )
            
        })}

    </div>
        {editMode && (
          <>
            <input type='text' value={editValue} onChange={handleEditChange} />
            <button onClick={handleConfirm}>Confirm</button>
          </>
        )}
    </>
    
  )
}
