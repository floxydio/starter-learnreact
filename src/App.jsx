import React, { useState, useEffect } from "react" // Berfungsi untuk mengimport library React
import Button from "./components/Button"
import TodoList from "./components/TodoList"

export default function App() {
  const [counter, setCounter] = useState(0) // useState adalah sebuah function yang berfungsi untuk membuat state baru. useState akan mengembalikan sebuah array dengan 2 elemen, yaitu state itu sendiri dan sebuah function untuk mengubah state tersebut. useState akan menerima sebuah argumen yang akan menjadi nilai awal dari state tersebut.
  const [todo, setTodo] = useState([])
  const [addTodo, setAddTodo] = useState("")

  function incrementCounter() {
    setCounter(counter + 1)
  }

  function decrementCounter() {
    setCounter(counter - 1)
  }

  function dataTodoDummy() {
    const data = [
      {
        id: 1,
        title: "Belajar React",
        description: "Belajar React Hooks"
      },
      {
        id: 2,
        title: "Belajar React Native",
        description: "Belajar React Native Hooks"
      }
    ]
    setTodo(
      data)
  }

  useEffect(() => {
    dataTodoDummy()
  }, [])

  return (
    <div>
      <p>{counter}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <p>=====================</p>

      <input type="text" value={
        addTodo
      } onChange={(e) => setAddTodo(e.target.value)} />
      <button onClick={() => {
        setTodo([...todo, { id: todo.length + 1, title: addTodo, description: addTodo }])
        // clear input
        setAddTodo("")
      }}>Add Todo</button>

      {todo.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        )
      })}


      <p>=====================</p>
      {todo.map((item) => {
        return <TodoList title={item.title} description={item.description} />
      })}

    </div>
  )
}