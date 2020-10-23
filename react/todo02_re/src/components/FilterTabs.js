import React from 'react'
import {
  Box,
  Tabs,
  Tab,
  Paper,
} from '@material-ui/core'

const FilterTabs = ({ value, setValue }) => {

  const handleTabChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box
      mt={5}
      display="flex"
      justifyContent="space-around">
      <Paper>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleTabChange}>
          <Tab label="ALL" />
          <Tab label="TODO" />
          <Tab label="DONE" />
        </Tabs>
      </Paper>
    </Box>
  )
}

export default FilterTabs