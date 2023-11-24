import React, { useEffect, useState } from 'react'
import Container from './components/Container'
import { Button, Input, Card } from 'antd';
import { routerPages } from './navigator/Router';

export default function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, [])

  return (
    <>
      <Container>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
          alignItems: 'center',
          marginBottom: 40
        }}>
          <img
            onClick={() => {
              routerPages.navigate("/sign-in", { replace: true })
            }}
            style={{
              borderRadius: 50,
            }}
            width={50}
            src="https://randomuser.me/api/portraits/lego/5.jpg"
          />
          <span style={{
            marginLeft: 10
          }}>Dio Okta R</span>
        </div>
        <Input placeholder="Add Your Todo" value={input} onChange={(e) => setInput(e.target.value)} />
        <Button type='primary' style={{
          marginTop: 40,
          width: '50%',
          marginLeft: '25%',
          marginBottom: 40
        }} onClick={() => {
          localStorage.setItem("todos", JSON.stringify([...todos, { id: todos.length + 1, title: input }]));
          setTodos([...todos, { id: todos.length + 1, title: input }])

          setInput('')
        }}>Submit Todo</Button>

        {todos.map((element) => {
          return <Card style={{
            marginTop: 20,
            marginBottom: 20
          }} key={element.id} bordered={true}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h1>{element.title}</h1>
              <Button type='primary' danger onClick={() => {
                localStorage.setItem("todos", JSON.stringify(todos.filter((todo) => todo.id !== element.id)));
                setTodos(todos.filter((todo) => todo.id !== element.id))
              }}>Delete</Button>
            </div>
          </Card>
        })}

      </Container >
    </>
  )
}
