import React from 'react';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: props.isCompleted,
    };
    this.updateStatusOfComplete = this.updateStatusOfComplete.bind(this);
  }

  updateStatusOfComplete() {
    const itemStatus = !this.state.isCompleted;
    this.props.updateStatusOfComplete(this.props.id, this.props.title, itemStatus);
    this.setState({
      isCompleted: itemStatus,
    });

  }
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.state.isCompleted}
          onChange={this.updateStatusOfComplete}
        />
        { this.props.title }
      </li>
    );
  }
}