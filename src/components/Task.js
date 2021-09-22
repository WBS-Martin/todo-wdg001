const Task = (props) => {
  return (
    <div>
      <li key={props.todo.id}>
        <span
          onClick={(e) => {
            props.handleCheck(e, props.todo.id)
          }}>
          {props.todo.title}
        </span>
        <button onClick={(e) => props.handleEdit(e, props.todo.id)}>
          edit
        </button>
        {props.todo.done && (
          <>
            ✔️
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
