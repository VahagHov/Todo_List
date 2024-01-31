import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Main = () => {
    const [description , setDescription] = useState("")
    const [date , setDate] = useState(new Date())

    const handleChangeDescription = () => {
        setDescription((e) => e.target.value)
    }

    const handleChangeDate = () => {
      setDate((e) => e.target.value)
    }
    
  return (
    <div>
        <input value={description} type='text' onChange={handleChangeDescription}/>
        <input value={date} type='date'  onChange={handleChangeDate}/>
        <button>Add</button>
        <Link to="todos">+</Link>
    </div>
  )
}
