import React from 'react';
import { Link, browserHistory } from 'react-router';
import sendRequest from '../api/api';
import TodoItem from './TodoItem';
import Logout from './Logout';

const FILTER_VIEW = {
  all: 'all',
  completed: 'completed',
  incompleted: 'incompleted',
};

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: null,
      filterView: props.params.filter || FILTER_VIEW.all,
    };
    this.updateTasksList = this.updateTasksList.bind(this);
    this.makeTodoList = this.makeTodoList.bind(this);
    this.updateStatusOfComplete = this.updateStatusOfComplete.bind(this);
    this.showCompleted = this.showCompleted.bind(this);
    this.showAll = this.showAll.bind(this);
    this.showIncompleted = this.showIncompleted.bind(this);
    this.processResponse = this.processResponse.bind(this);
  }

  componentDidMount() {
    sendRequest('tasks')
      .then(response => response.json())
      .then(this.updateTasksList);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.filter) {
      this.setState({
        filterView: nextProps.params.filter,
      });
    } else {
      this.setState({
        filterView: FILTER_VIEW.all,
      });
    }
  }

  processResponse(status) {
    if (status === 200 || status === 304)  {
      this.updateTasksList();
    } else {
      browserHistory.push('/login');
    }
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
    const updatedTasks = this.state.tasks;
    updatedTasks[updatedTasks.findIndex(el => el.id === id)].isCompleted = isCompleted;
    this.updateTasksList(updatedTasks);
  }

  showCompleted() {
    this.setState({
      filterView: FILTER_VIEW.completed,
    });
  }

  showIncompleted() {
    this.setState({
      filterView: FILTER_VIEW.incompleted,
    });
  }

  showAll() {
    this.setState({
      filterView: FILTER_VIEW.all,
    });
  }

  makeTodoList(array = [], filterView) {
    let resultArr;
    switch (filterView) {
      case FILTER_VIEW.completed:
        resultArr = array.filter(el => el.isCompleted);
        break;
      case FILTER_VIEW.incompleted:
        resultArr = array.filter(el => !el.isCompleted);
        break;
      default:
        resultArr = array;
        break;
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
          <button type="button" onClick={this.showCompleted}>Show only completed</button>
        </li>
        <li>
          <button type="button" onClick={this.showAll}>Show all tasks</button>
        </li>
        <li>
          <button type="button" onClick={this.showIncompleted}>Show incompleted tasks</button>
        </li>
      </ul>)
      :
      null;

    const todoComponent = this.state.tasks ? (
      <div>
        <div>
          <Link to="/todo" activeStyle={{ color: '#53acff' }}> | TODO list</Link>
          <Link to="/todo/completed" activeStyle={{ color: '#53acff' }}> | Only completed items</Link>
          <Link to="/todo/incompleted" activeStyle={{ color: '#53acff' }}> | Only incompleted items</Link>
        </div>
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
