import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';

const TODOSDATA = [
  { title: "foo",
    doing: false}
]

ReactDOM.render(
  <React.StrictMode>
    <Todo todosData={TODOSDATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);

