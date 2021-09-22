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
    console.log(deleteTodo)
    setTodos(deleteTodo)
  }

  const handleEdit = (e, id) => {
    e.preventDefault()
    const editTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = input
      }
      return todo
    })
    setTodos(editTodo)
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
      />
    </div>
  )
}

export default App
