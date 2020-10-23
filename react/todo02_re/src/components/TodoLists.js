import React, { useEffect } from 'react'
import {
  Box,
  Button,
  ListItem,
  List,
  Checkbox,
  ListItemText
} from '@material-ui/core'
  
const TodoLists = ({ todos, setTodos, value, displayTodos, setDisplayTodos }) => {
  
  useEffect(() => {
    changeDisplayTodos()
  },[todos,value])
  
  const changeDisplayTodos = () => {
    switch (value) {
      case 0 : 
        setDisplayTodos(todos)
        break
      case 1 :
        setDisplayTodos(todos.filter(x => {
          if (x.doing === false) {
            return x
          }
        }))
        break
      case 2 : 
        setDisplayTodos(todos.filter(x => {
          if (x.doing === true) {
            return x
          }
        }))   
        break
    }
  }
  
  const row = () => {
    return (
    displayTodos.map(displayTodo => (
      <List component="ul" key={displayTodo.title}>
      <ListItem component="li">
        <Checkbox 
          checked={displayTodo.doing}
          onClick={() => {checkTodo(displayTodo)}}
          />
          <ListItemText>{displayTodo.title}</ListItemText>
        <Button
          variant="contained"
          onClick={() => {deleteTodo(displayTodo)}}
          >
          DELETE
        </Button>
      </ListItem>
    </List>
    ))
  )}

  const deleteTodo = (displayTodo) => {
    setTodos(todos.filter(x => {
      if (x.title !== displayTodo.title) {
        return x
      }
    }))
  }

  const checkTodo = (displayTodo) => {
    setTodos(todos.filter(x => {
      if (x.title === displayTodo.title) {
        x.doing = !x.doing
      }
      return x
    }))
  }

  return (
    <Box
      mt={5}>
        {row}
    </Box>
  )
}

export default TodoLists