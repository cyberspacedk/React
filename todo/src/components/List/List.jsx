import React from "react";
import uuidv4 from "uuid/v4";
import Item from "../Item/Item";
import "./list.css";

const filterItem = (arr, filter) => {
	return arr.filter(elem=> typeof filter == 'boolean' ? elem.complete == filter : elem)
}


const List = ({ filter, todolist, deleteItem, editMode , cancelEdit ,editNote, saveNote, editInput , doneItem}) => {
  return (
    <ul className="todo-list">

      {filterItem(todolist, filter ).map(elem => (
        <Item key={elem.id}
					text={elem.text}
					edit={elem.edit}
					id={elem.id}
					isDone={elem.complete}
          editMode={editMode}
					deleteItem={deleteItem}
					cancelEdit={cancelEdit}
					editNote={editNote}
					saveNote={saveNote}
					editInput={editInput}
					doneItem={doneItem} 
        /> 
      ))}
    </ul>
  );
};

export default List;
