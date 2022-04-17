import React from 'react'

import './TodoList.css'

interface Props {
  items: {
    id: string
    text: string
  }[]
  onDeleteTodo: (todoId: string) => void
}

const TodoList: React.FC<Props> = (props) => {
  return <ul>
    {props.items.map(item =>
      <li
        key={item.id}>
        <span>{item.text}</span>
        <button onClick={props.onDeleteTodo.bind(null, item.id)}>DELETE</button>
      </li>,
    )}
  </ul>
}

export default TodoList
