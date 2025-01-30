import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos({changevalue}) { 
    const { changetodo } = changevalue; 

    const todos_here = useSelector( (state)=> state.todos ) 
    const dispatch = useDispatch()

  return (
    <> 
        <div>Todos</div>
        {/* core js logic */}
        {/* {todos_here.map( each =>(
            <li key={each.id}>
                {each.text}
                <button className='bg-red-400 m-2 p-2' 
                 onClick={ ()=> {dispatch(removeTodo(each.id))} }  
                >Delete</button> 
            </li> 
        )) }  */}

        <ul className="list-none">
            {todos_here.map((each) => (
            <li
                className="flex bg-zinc-800 justify-between m-2"
                key={each.id}
             >
                <div className='text-white m-2'>{each.text}</div>

                <div className='flex' >
                    <button
                    className='m-2 p-2 rounded-md bg-blue-400'
                    onClick={()=>changetodo(each.id, each.text)} 
                    >Update</button>

                    <button className='m-2 p-2 rounded-md bg-red-400'
                    onClick={() => dispatch(removeTodo(each.id))}
                    >Delete</button>
                </div>

            </li>
            ))}
        </ul> 
         
    </> 
  )
}

export default Todos