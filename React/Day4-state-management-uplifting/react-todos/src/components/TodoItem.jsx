import "./Todo.css";

export const TodoItem = ({ todo, handleStatus }) => {
  return (
    <div className="inputbox">
      {todo.title} - {todo.status ? "Done" : "Not Done"}
      <input type="checkbox" onClick={() => handleStatus(todo.id)} />
    </div>
  );
};
