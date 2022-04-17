import React from 'react'

interface Props {
  items: {
    id: string
    text: string
  }[]
}

const TodoList: React.FC<Props> = (props) => {
  return <ul>
    {props.items.map(item =>
      <li
        key={item.id}>{item.text}
      </li>,
    )}
  </ul>
}

export default TodoList
