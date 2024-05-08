import React from 'react'
import AddTodo from './AddTodo'

function Navbar() {
  return (
    <div className='justify-center'>
        <div className="main bg-sky-400 justify-center	 my-4 flex	text-align: center;">
            <h2 className='text-center py-1 font-bold text-white'> What you Want to do Today...?</h2>
          <AddTodo/>
        </div>
    </div>
  )
}

export default Navbar