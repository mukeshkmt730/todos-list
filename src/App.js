import './App.css';
import Header from "./MyComponent/Header";
import { Todos } from "./MyComponent/Todos";
import { Footer } from "./MyComponent/Footer"; 
import React, { useState, useEffect } from 'react';
import { AddTodo } from "./MyComponent/AddTodo";
import { About } from "./MyComponent/About";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  let initTodo;

  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const onDelete = (todo) => {
    console.log('i am on delete of todo', todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

    localStorage.getItem('todos');
  }

  const addTodo = (title, desc) => {
    console.log('i am adding this todo', title, desc);
    let sn = todos.length ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = {
      sno: sn,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);




  }

  const [todos, setTodos] = useState(
    initTodo
    // [
    // {
    //   sno: 1,
    //   title: 'go to the market',
    //   desc: 'you need to go to the market to get this job done'
    // },
    // {
    //   sno: 2,
    //   title: 'go to the mall',
    //   desc: 'you need to go to the mall to get this job done'
    // },
    // {
    //   sno: 3,
    //   title: 'go to the ghat',
    //   desc: 'you need to go to the ghat to get this job done'
    // }
    // ]
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


  return (
    <>
      <Router>
        <Header title='MyTodosList' searchBar={true} />

        <Switch>
          <Route exact path="/" render={() => {
            return (<>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>

        </Switch>



        <Footer />
      </Router>
    </>
  );
}

export default App;

