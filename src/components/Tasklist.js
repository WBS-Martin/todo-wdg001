import Task from './Task'

const Tasklist = (props) => {
  console.log(props)
  return (
    <div>
      {props.todos &&
        props.todos.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            handleCheck={props.handleCheck}
            handleDelete={props.handleDelete}
            handleEdit={props.handleEdit}
            handleSaveEdit={props.handleSaveEdit}
          />
        ))}
    </div>
  )
}

export default Tasklist
