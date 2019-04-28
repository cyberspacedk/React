import React from "react";
import styled, { css } from "styled-components";

// переменные типа SASS
const fontColor = "yellow";
const cancelColor = "#000";
const transparentColor = `transparent`;

// CSS HELPERS
const centered = css`
  position: absolute;
  top: ${({ top }) => top + "%"};
  left: 50%;
  transform: translate(-50%, -50%);
`;

// заголовок
const Title = styled.h2`
  color: ${fontColor};
  background-color: aquamarine;
  width: 200px;
  /* так пишем ховер */
  &:hover {
    font-size: 70px;
    transition: 0.5s;
  }
`;
// кнопка
const Button = styled.button`
  padding: 25px;
  background-color: palevioletred;
  border: none;
  margin: 20px;
  color: ${fontColor};
  @media (min-width: 900px) {
    ${centered};
  }
`;

// НАСЛЕДОВАНИЕ СТИЛЕЙ. помещаем наследуемый компонент внутрь метода styled().
// если некоторые стили нужно переопределить то пишем в ``
const Cancel = styled(Button)`
  color: ${cancelColor};
`;

// родительский блок
const Controls = styled.div`
  button {
    background-color: palevioletred;
    &:hover {
      background-color: green;
    }
  }
  /* ховер на родителя и сработка на дочернем h2  */
  &:hover ${Button} {
    background-color: #ccc;
  }
  &:hover h2 {
    width: 400px;
  }
  @media (min-width: 768px) {
    background-color: purple;
    ${Button} {
      color: green;
    }
  }
`;

const Fake = ({ className }) => (
  <div className={className}>
    <p>Fake text</p>
    <span>description</span>
  </div>
);

const FakeStyled = styled(Fake)`
  p {
    padding: 0 30px;
    font-weight: 700;
  }
  span {
    color: blue;
  }
`;
const Appheader = styled.header`
  padding: 10px;
  text-align: center;

  span {
    background-color: yellow;
    border: 2px solid #000;
    font-weight: 800;
  }
`;

const Header = () => {
  return (
    <div>
      <Appheader>
        <span className="color">App header</span>
      </Appheader>
      <Controls>
        <Title> Title </Title>
        <Fake />
        <FakeStyled />
        <Button top={30}>STYLED </Button>
        <Cancel>CANCEL </Cancel>
      </Controls>
    </div>
  );
};

export default Header;
