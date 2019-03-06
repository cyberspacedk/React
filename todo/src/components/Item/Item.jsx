import React from "react";
import Itemtext from "../ItemText/Itemtext";
import Iteminput from "../ItemInput/Iteminput";

const Item = ({ text, deleteItem, editMode , edit ,cancelEdit, id, editNote, saveNote ,editInput, isDone, doneItem}) => {
  return (
    <li className="item">
	 {(edit) ? 
		 ( <Iteminput text={text} 
									id={id} 
									cancelEdit={cancelEdit} 
									editNote={editNote}
									saveNote={saveNote}
									editInput={editInput}

		 />) 
		:
			(<Itemtext text={text} 
							   id={id}
								 editMode={editMode} 
								 deleteItem={deleteItem} 
								 isDone={isDone}
								 doneItem={doneItem}
			/>)}
    </li>
  );
};

export default Item;
