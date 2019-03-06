import React from "react";
import './create.css';

const Create = ({text, createNote, submitForm}) => {

  return (
    <form onSubmit={submitForm}>
      <input type="text" name="text" value={text} onChange={createNote}/>
      <input type="submit" name="submit" value="create"/>
    </form>
  );
};

export default Create;
