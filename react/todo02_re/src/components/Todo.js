import React, { useState } from 'react';
import CreateTodo from './CreateTodo'
import FilterTabs from './FilterTabs'
import TodoLists from './TodoLists'
import {
  Container,
  CssBaseline,
} from '@material-ui/core'

const Todo = ({ todosData }) => {
  
  const [todos, setTodos] = useState(todosData)
  const [todoTitle, setTodoTitle] = useState("")
  const [displayTodos, setDisplayTodos] = useState(todos)
  const [value, setValue] = useState(0)
  
  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <CreateTodo 
            todos={todos} setTodos={setTodos} 
            todoTitle={todoTitle} setTodoTitle={setTodoTitle}
          />
          <FilterTabs 
            value={value} setValue={setValue}
          />
          <TodoLists 
            todos={todos} setTodos={setTodos} 
            displayTodos={displayTodos} setDisplayTodos={setDisplayTodos}
            value={value}
          />
      </Container>
    </React.Fragment>
  )
}

export default Todo;
