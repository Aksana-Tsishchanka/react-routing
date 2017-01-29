import React from 'react';
import sendRequest from './api';
import TodoItem from './TodoItem.jsx';
import Logout from './Logout.jsx';


const FILTER_VIEW = {
  all: "all",
  completed: "completed",
  incompleted: "incompleted",
}

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: null,
      filterView: FILTER_VIEW.all,
    };
    this.updateTasksList = this.updateTasksList.bind(this);
    this.makeTodoList = this.makeTodoList.bind(this);
    this.updateStatusOfComplete = this.updateStatusOfComplete.bind(this);
    this.showCompleted = this.showCompleted.bind(this);
    this.showAll = this.showAll.bind(this);
    //this.showIncompleted = this.showInCompleted.bind(this);
  }

  componentDidMount() {
    sendRequest('tasks')
      .then(response => response.json())
      .then(this.updateTasksList);
  }

  updateTasksList(tasks) {
    if (tasks instanceof Array) {
      this.setState({
        tasks,
      });
    }
  }

  updateStatusOfComplete(id, title, isCompleted) {
    sendRequest(`tasks/${id}`, {
      method: 'put',
      body: JSON.stringify({ title, isCompleted }),
    });
  }

  showInCompleted() {
    /*sendRequest('tasks?isCompleted=false')
      .then(response => {
        response.json();
      })
      .then(response => this.updateTasksList(response));
      */
  }

  showCompleted() {
    this.setState({
      filterView: FILTER_VIEW.completed,
    });
  }
  showAll() {
    this.setState({
      filterView: FILTER_VIEW.all,
    });
  }

  makeTodoList(array = [], filterView) {
    let resultArr = array;
    if (filterView === FILTER_VIEW.completed) {
      resultArr = resultArr.filter(el => el.isCompleted);
    }
    return resultArr.map(item =>
      <TodoItem
        {...item}
        key={item.id}
        updateStatusOfComplete={this.updateStatusOfComplete}
      />);
  }

  render() {
    const todoActions = this.state.tasks && this.state.tasks.length > 0 ?
      (<ul>
        <li>
          <a onClick={this.showCompleted}>Show only completed</a>
        </li>
        <li>
          <a onClick={this.showAll}>Show all tasks</a>
        </li>
      </ul>)
      :
      null;

    const todoComponent = !!this.state.tasks ? (
      <div>
        <Logout />
        <h1>TO DO list</h1>
        { this.makeTodoList(this.state.tasks, this.state.filterView) }
        { todoActions }
      </div>
      ) :
      (
        <div>Please Log In to have access to TODO list!</div>
      );

    return todoComponent;
  }
}
