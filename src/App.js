import React, { useState } from 'react'
import './App.css'
import Tasklist from './components/Tasklist'
import Userinput from './components/Userinput'

const App = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const handleUserInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      id: Date.now(),
      title: input,
      done: false,
      editable: false,
    }
    setTodos([...todos, newTodo])
    setInput('')
  }

  const handleCheck = (e, id) => {
    e.preventDefault()
    const checkTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    })
    setTodos(checkTodo)
  }

  const handleDelete = (e, id) => {
    e.preventDefault()
    const deleteTodo = todos.filter((todo) => todo.id !== id)
    setTodos(deleteTodo)
  }

  const handleEdit = (e, id) => {
    e.preventDefault()

    const editTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.editable = !todo.editable
      }
      return todo
    })

    setTodos(editTodo)
  }

  const handleSaveEdit = (e, id, editValue) => {
    e.preventDefault()
    const saveEditTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = editValue
        todo.editable = !todo.editable
      }
      return todo
    })
    setTodos(saveEditTodo)
  }

  return (
    <div className='App'>
      <Userinput
        handleUserInput={handleUserInput}
        handleSubmit={handleSubmit}
        input={input}
      />
      <Tasklist
        todos={todos}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleSaveEdit={handleSaveEdit}
      />
    </div>
  )
}

export default App
