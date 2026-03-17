import React, { Component } from "react";

export class TaskList extends Component {
  tasks = [
    { id: 1, text: "Вивчити React" },
    { id: 2, text: "Зробити домашку" },
    { id: 3, text: "Піти на прогулянку" },
  ];

  handleDelete = (id) => {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <h2>Список завдань</h2>
        <ul>
          {this.tasks.map((task) => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => this.handleDelete(task.id)}>
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}