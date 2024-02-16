import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { onCompleted, updateTodo } from '../redux/todoSlice'
import { onDelete } from '../redux/todoSlice'

export const Todos = () => {
  const {date} = useParams()
  const dispatch = useDispatch();
  const todos = useSelector(({todos}) => todos[date])

  console.log("log ---" , date);
  console.log("log - 2 ----" , todos);

  const [editMode , setEditMode] = useState(false)
  const [editValue, setEditValue] = useState('');
  const [editId, setEditID] = useState('');

  const handleEdit = (todoId) => () => {
    const {description} = todos.find(({id}) => id === todoId)

    setEditID(todoId)
    setEditValue(description)
    setEditMode(true)

  }

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
        
        {todos?.map(({id , description , completed}) => {
            return (  
            <>
              <span><Link to="/">Back</Link></span>
                <div key={id} className='Todos'>
                    <input type="checkbox" checked = {completed} onChange={()=> dispatch(onCompleted({id,date,completed}))} />
                    Description: {description}
                    <button onClick={handleEdit(id)}>Edit</button>
                    <button onClick={() => dispatch(onDelete({date,id}))}>Delete</button>
                </div>       
            </>
            )
            
        })}n

    </div>

        {editMode && (
          <div className='Edit_Mode'>
            <input type='text' value={editValue} onChange={handleEditChange} />
            <button onClick={handleConfirm}>Confirm</button>
          </div>
          
        )}
    </>
    
  )
}
