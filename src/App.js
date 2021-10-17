import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import Header from "./components/header";
import TodoForm from "./components/todoform";
import TodoList from "./components/todolist";
import Wrapper from "./components/wrapper";

function App() {
  const [todoListItems, settodoListItems] = useState([]);
  const onsavedataHandler = (savedData) => {
    if (todoListItems.includes(savedData)) {
      alert("List Item already exists");
    } else {
      settodoListItems([...todoListItems, savedData]);
    }
  };
  const deleteListItem = (i) => {
    todoListItems.splice(i, 1);
    settodoListItems([...todoListItems]);
  };
  return (
    <Wrapper>
      <Header />
      <Card className="form">
        <TodoForm onSaveData={onsavedataHandler} />
      </Card>
      <Card className="list">
        <TodoList ondelete={deleteListItem} items={todoListItems} />
      </Card>
    </Wrapper>
  );
}

export default App;
