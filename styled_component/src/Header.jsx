import React from "react";
import styled from "styled-components";

// переменные типа SASS
const fontColor = "yellow";
const cancelColor = "#000";
const transparentColor = `transparent`;

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

const Header = () => {
  return (
    <div>
      <Controls>
        <Title> Title </Title>
        <Fake />
        <FakeStyled />
        <Button>STYLED </Button>
        <Cancel>CANCEL </Cancel>
      </Controls>
    </div>
  );
};

export default Header;
