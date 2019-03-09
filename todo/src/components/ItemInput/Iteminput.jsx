import React, { Fragment } from "react";

const Iteminput = ({ cancelEdit, id, editNote, saveNote, editInput}) => {
  return (


    <Fragment>

      <input type="text" data-id={id} value={editInput} onChange={editNote} />

      <div className="user-choise">
        <button data-id={id} onClick={saveNote}>save</button>
        <button data-id={id} onClick={cancelEdit}>cancel</button>
      </div>

    </Fragment>
  );
};

export default Iteminput;
