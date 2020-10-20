import React, { useState, useEffect } from "react"
import Title from "./Title"
import {
  Container,
  CssBaseline,
  ListItem,
  Checkbox,
  ListItemText,
  Button,
  Box,
  Paper,
  Tabs,
  Tab,
  List
} from "@material-ui/core"

const INITIAL_TASK = {
  title: "Study React",
  doing: false
}

const App = () => {
  const [tasks, setTasks] = useState([INITIAL_TASK])
  const [task_title, setTask_title] = useState("")
  const [displayTasks, setDisplayTasks] = useState([])
  const [value, setValue] = useState(0)
  
  useEffect(() => {
    handleChangeTab(null, value)
  },[tasks])
  
  const handleChangeTab = (event, newValue) => {
    setValue(newValue)
      switch (newValue) {
        case 0 :
          return setDisplayTasks(tasks)
        case 1 :
          return setDisplayTasks(tasks.filter(x => x.doing == false))
        case 2 :
          return setDisplayTasks(tasks.filter(x => x.doing == true))
      }
  }

  const handleCheckboxChanges = (task) => {
    setTasks(tasks.filter(x => {
      if (x === task) x.doing = !x.doing
      return x
    }))
  }
  const deleteTask = (task) => {
    setTasks(tasks.filter(x => x !== task))
  }

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Title tasks={tasks} setTasks={setTasks} task_title={task_title} setTask_title={setTask_title}/>
        <Box
          mt={5}
          display="flex"
          justifyContent="space-around"
        >
          <Paper square>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChangeTab}
            >
              <Tab label="ALL"/>
              <Tab label="TODO"/>
              <Tab label="DONE"/>
            </Tabs>
          </Paper>
        </Box>
        <List
          style={{marginTop: "48px"}}
          component="ul"
        >
        {displayTasks.map(task => (
          <ListItem key={task.title} component="li">
            <Checkbox
             checked={task.doing}
              color="primary"
              onChange={() => handleCheckboxChanges(task)}
            />
            <ListItemText>{task.title}</ListItemText>
            <Button
              herf=""
              onClick={() => deleteTask(task)}
            >
            Delete
            </Button>
          </ListItem>
        ))}
        </List>
      </Container>
    </React.Fragment>
  )
}

export default App