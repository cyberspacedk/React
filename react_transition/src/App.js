import React, { useState } from "react";
import styled from "styled-components";
import CSSTransition from "react-transition-group";

const Button = styled.button.attrs({
  value: "Click"
})`
  display: block;
  background-color: green;
  padding: 10px;
  margin: auto;
  color: #fff;
  &:hover {
    background-color: red;
  }
`;

const App = () => {
  const [show, setShow] = useState(false);

  return <Button />;
};

export default App;
