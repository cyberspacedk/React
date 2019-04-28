import { css } from "styled-components";

export const font = `
    font-family: Monospace;
    font-size: 20px;
    color: red
`;

export const position = ({ posX = 0, posY = 0 } = {}) => css`
  position: absolute;
  top: ${posY};
  left: ${posX};
`;

export const boxSize = ({ w = "100px", h = "100px" } = {}) => css`
  width: ${w};
  height: ${h};
  background-color: pink;
`;
