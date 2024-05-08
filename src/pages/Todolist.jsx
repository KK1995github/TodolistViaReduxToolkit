import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTodo, removeTodo, completeTodo } from '../features/todo/TodoSlice'
import Navbar from './Navbar'

function Todolist() {
  const todos = useSelector((state) => state.todos)

  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div className=''>
        <table className=" text-gray-500 dark:text-gray-400 w-3/4 mx-36 ">
          <thead className="text-sm text-gray-700 uppercase ">
            <tr className=" bg-sky-400 h-12 border-1px-solid-silver text-center text-white">
              <th >Sr.no.</th>
              <th className=" bg-sky-400 h-12 w-1/3">Title</th>
              <th className=" bg-sky-400 h-12 w-1/3">Description</th>
              <th className=" bg-sky-400 h-12 w-1/4">Actions</th>
            </tr>
          </thead>
          <tbody >
            {todos.map((todo, index) => {
              return (
                <tr key={todo.id} className='text-center bg-sky-400 border  text-white text-lg h-16'>
                  <td className={`hover:bg-slate-500 ${todo.completed ? "line-through" : ""}`}>{index + 1 + "."}</td>
                  <td className={`hover:bg-slate-500 ${todo.completed ? "line-through" : ""}`}>{todo.title}</td>
                  <td className={`hover:bg-slate-500 ${todo.completed ? "line-through" : ""}`}>{todo.description}</td>

                  <td className='flex justify-evenly mt-2'>
                    {
                      todo.completed === false ?
                        (
                          <>
                            <button className='bg-red-400 hover:bg-red-600 text-white rounded w-28 h-10' onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                            <button className='bg-green-400 hover:bg-green-600 text-white  rounded w-28 h-10' onClick={() => dispatch(editTodo(index))}>Edit</button>
                          </>

                        ) :
                        null
                    }


                    <button className='bg-blue-400 hover:bg-blue-600 text-white  rounded w-28 h-10' onClick={() => dispatch(completeTodo({ index }))}>{todo.completed ? "Undo" : "Complete"} </button>
                  </td>

                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>

  )
}

export default Todolist