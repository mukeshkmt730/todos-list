import React from 'react'

export const TodoItem = (props) => {
    return (
        <div className='container' className="text-center my-3" style={{border:"2px solid black",background:"pink"}} >
            <h4>{props.todo.title}</h4>
            <p>{props.todo.desc}</p>
            <button className="btn btn-sm btn-danger my-3" onClick={() => { props.onDelete(props.todo) }}>Delete</button>
        </div>
    )
}
