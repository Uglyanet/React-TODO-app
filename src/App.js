import React, { createContext, useState } from 'react';
import { Active } from './components/Active';
import { List } from './components/List';
import { New } from './components/New';
import { StyledButton } from './AppStyled'

import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyled = createGlobalStyle`
  body {
    margin:0px;
  }
`;

const theme = {
  primary: '#D1004B',
  white: '#FFFFFF',
}

export const MyContext = createContext(null);

const initialState = {
  list: [
    { id: 1, name: 'task 1', description: ' task 1 description', },
    { id: 2, name: 'task 2', description: ' task 2 description', }
  ],
  active: null,
  showNew: false,
}

export const App = () => {
  const [state, setState] = useState(initialState);
  const getbyId = (taskId) => state.list.find(i => i.id === taskId);
  const deleteTask = (taskId) => {
    const newList = state.list.filter(i => i.id !== taskId);
    setState({ ...state, list: newList, active: null });
  }
  const cancelTask = () => {
    setState({ ...state, showNew: false});
  }
  const addTask = (newTask) => {
    setState({ ...state, list: state.list.splice(0, 0, newTask), active: null });
  }
  const changeTask = (task) => {
    const newTasks = state.list.map(t => {
      if (t.id === task.id) {
        return task;
      }
      return t;
    })
    setState({ ...state, list: newTasks, active: task });
  }

  const onShowNewTaskForm = () => {
    setState({ ...state, showNew: true, active: null })
  }
  const context = {
    list: state.list,
  }
  return (
    <MyContext.Provider value={context}>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <div className="App">
          {
            state.active && (
              <Active />
            )
          }
          {
            state.showNew &&
            (
              <New cancelTask={cancelTask} addTask={addTask}/>
            )
          }
          <List />
          <StyledButton onClick={onShowNewTaskForm} >ADD NEW TASK</StyledButton>
        </div>
      </ThemeProvider>
    </MyContext.Provider>
  )
}