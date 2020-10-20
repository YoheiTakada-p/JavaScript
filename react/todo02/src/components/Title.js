import React from "react"
import  {
  Box,
  TextField,
  Button  
} from "@material-ui/core"

const Title = ({tasks, setTasks, task_title, setTask_title}) => {
    
  const handleTextFieldChanges = (e) => {
    setTask_title(e.target.value)
  }
  const FindSameTitle = () => {
    return tasks.some(task => task.title === task_title)
  }
  const resetTextField = () => {
    setTask_title("")
  }
  const addTask = () => {
    setTasks([...tasks,{
      title: task_title,
      doing: false
    }])
    resetTextField()
  }
  return (
    <Box
      mt={5}
      display="flex"
      justifyContent="space-around"
    >
      <TextField
        label="Title"
        value={task_title}
        onChange={handleTextFieldChanges}
      />
      <Button
        disabled={task_title === "" || FindSameTitle()}
        variant="contained"
        color="primary"
        onClick={addTask}
        href=""
      >
      Create
      </Button>         
    </Box>
  )
}

export default Title