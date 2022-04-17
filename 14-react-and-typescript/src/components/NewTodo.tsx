import React from 'react'

const NewTodo: React.FC = () => {
  return <form>
    <div>
      <label htmlFor="todo-text">Todo Text</label>
      <input type="text" id="todo-text" placeholder=""/>
    </div>
    <button type="submit">ADD TODO</button>
  </form>
}

export default NewTodo
