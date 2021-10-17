const TodoList = ({ items, ondelete }) => {
  const deleteHandler = (i) => {
    ondelete(i);
  };
  return (
    <ul>
      {items.length === 0 ? (
        <div>No Task added </div>
      ) : (
        items.map((item, i = 0) => {
          return (
            <li key={i} onClick={() => deleteHandler(i)}>
              {item}
            </li>
          );
        })
      )}
    </ul>
  );
};

export default TodoList;
