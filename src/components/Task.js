import { useState } from 'react'

const Task = (props) => {
  const [editValue, setEditValue] = useState(props.todo.title)

  return (
    <div>
      <li key={props.todo.id}>
        {props.todo.done && <>✔️</>}

        {!props.todo.editable && (
          <>
            <span
              onClick={(e) => {
                props.handleCheck(e, props.todo.id)
              }}>
              {props.todo.title}
            </span>
            <button onClick={(e) => props.handleEdit(e, props.todo.id)}>
              edit
            </button>
          </>
        )}

        {props.todo.editable && (
          <>
            <input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button
              onClick={(e) =>
                props.handleSaveEdit(e, props.todo.id, editValue)
              }>
              ok
            </button>
          </>
        )}

        {props.todo.done && !props.todo.editable && (
          <>
            <button onClick={(e) => props.handleDelete(e, props.todo.id)}>
              del
            </button>
          </>
        )}
      </li>
    </div>
  )
}

export default Task
