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
    <div>
        <input value={description} type='text' onChange={handleChangeDescription}/>
        <input value={date} type='date'  onChange={handleChangeDate}/>
        <button onClick={handleAdd}>Add</button>
     

        {Object.entries(todos).map(([date , list]) => {
                  console.log('=====================')
                  console.log('date', date)
                  console.log('list', list)
          return (
            <div key={Math.random()}>
              <ul > 
                  <li>
                      {date} 
                      Count: { list.length}
                      <Link to={`todos/${date}`}>Details</Link>
                  </li>
              </ul>
            </div>
              
          
          )
        })}
    </div>
  )
}
