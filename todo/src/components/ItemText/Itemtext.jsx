import React ,{Fragment}from "react";

const Itemtext = ({text, deleteItem, editMode, id, doneItem, isDone}) => {
  return (
    <Fragment>
      <p className={isDone ? 'done regular' : 'regular'} data-id={id} onClick={doneItem}>{text}</p>

      <div className="user-choise">
        <button data-id={id} onClick={editMode}> edit </button>
        <button data-id={id} onClick={deleteItem}> delete</button> 
      </div>
     
    </Fragment>
  );
};

export default Itemtext;
