import React from 'react'
import {
  Box,
  TextField,
  Button
} from '@material-ui/core'

const CreateTodo = ({ todos, setTodos, todoTitle, setTodoTitle }) => {

  const handleTextChange = e => {
    setTodoTitle(e.target.value)
  }

  const handleCreateTodo = () => {
    setTodos([...todos,{
        title: todoTitle,
        doing: false
      }]
    )
    ResetTodoTitle()
  }

  const CheckTitle = () => {
    return todos.some(todos => todos.title === todoTitle)
  }

  const ResetTodoTitle = () => {
    setTodoTitle("")
  }
  
  return (
    <Box
      mt={5}
      display="flex"
      justifyContent="space-around">
        <TextField label="Title" value={todoTitle} onChange={e => handleTextChange(e)}/>
        <Button
          disabled={todoTitle === "" || CheckTitle()}
          variant="contained"
          color="primary"
          onClick={handleCreateTodo}>
          Create
        </Button>
    </Box>
  )
}

export default CreateTodo