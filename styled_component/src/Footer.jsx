import React from "react";
import styled from "styled-components";
import { font, boxSize } from "./Mixins";

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <p>This is footer app</p>
      <div />
    </footer>
  );
};

export default styled(Footer)`
  padding: 10px;
  background-color: aquamarine;
  p {
    text-align: center;
    ${font};
  }
  div {
    ${boxSize({ w: "300px" })}
  }
`;
