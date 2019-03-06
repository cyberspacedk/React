import React from "react";
import "./form.css";

export const Form = ({ text, inputChange, filter, submit, email, password}) => {
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        name="filter"
        placeholder="filter phone"
        onChange={filter}
      />

      <input
        type="text"
        name="text"
        placeholder="type your query"
        value={text}
        onChange={inputChange}
      />

      <input
        type="email"
        name="email"
        placeholder="type your email"
        value={email}
        onChange={inputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="type your password"
        value={password}
        onChange={inputChange}
      />

      <input type="submit" name="submit" />
    </form>
  );
};

export default Form;
