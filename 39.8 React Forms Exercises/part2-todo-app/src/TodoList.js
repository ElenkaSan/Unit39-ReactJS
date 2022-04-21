import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";
import './TodoList.css';

const TodoList = () => {
    const [lists, setLists] = useState([]);

    const addList = lists => {
        let newList = { ...lists, id: uuid() };
        setLists(lists => [...lists, newList]);
    };

    const removing = (idList) => {
        setLists(lists.filter(({ id }) => id !== idList));
    };

    return (
        <div>
          <h3 className="TodoList">My Todo List</h3>
            <NewTodoForm addingList={addList} />
              <ol>
                {lists.map(({ id, todo, discription}) =>
                  <li>
                   <Todo remove={removing} key={id} id={id} todo={todo} discription={discription} />
                 </li>
                )}
              </ol>
        </div>
      )
   };
   
export default TodoList;
   
