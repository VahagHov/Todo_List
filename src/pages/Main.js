import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addTodo } from '../redux/todoSlice'

export const Main = () => {
    const [description , setDescription] = useState("")
    const [date , setDate] = useState(new Date())

    const todos = useSelector(({todos}) => todos)
    // console.log(todos);
    const dispatch = useDispatch()

    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleChangeDate = (e) => {
      setDate(e.target.value)
    }

    const handleAdd = () => {
      dispatch(addTodo({
        description,
        date
      }))
    }
    
  return (
  <>
  <div className='Todo_App'>TODO APP</div>

    <div className='Main'>
        <input value={description} type='text' placeholder='Enter Task' onChange={handleChangeDescription}/>
        <input value={date} type='date'  onChange={handleChangeDate}/>
        <button onClick={handleAdd}>Add Task</button>
     

        {Object.entries(todos).map(([date , list]) => {
                  console.log('=====================')
                  console.log('date', date)
                  console.log('list', list)
          return (
            <div key={Math.random()} className='Main_Tasks'>
                      <b>Upcoming Tasks</b>
                      <h2>Deadline: {date} </h2>
                      <h4> Count: { list.length} </h4>
                      <button><Link to={`todos/${date}`}>Next</Link></button>
            </div>
              
          
          )
        })}
    </div>
  </>
  )
}
