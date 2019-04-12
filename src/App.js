import React, { Component } from "react";
import AddTodo from './containers/AddTodo';
import FilteredTodoList from "./containers/FilteredTodoList";
import Filters from "./components/Filters";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AddTodo />
        <FilteredTodoList />
        <Filters />
      </React.Fragment>
    );
  }
}

export default App;
