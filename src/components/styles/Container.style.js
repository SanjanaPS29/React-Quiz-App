import styled from "styled-components";

export const Container = styled.div`
  width: 650px;
  height: 260px;
  border: 3px solid #d5dbd6;
  margin: 60px auto;
  border-radius: 25px;
  padding: 40px;
  box-shadow: 8px 5px hsl(0deg 2% 81% / 36%), 10px 5px hsl(0deg 13% 82% / 0%);
margin-bottom:5px;
  p {
    font-weight: 500;

    font-family: Verdana;
    font-size: 16px;
    font-height: normal;
    font-style: normal;
    color: #000000;
  }

  button {
    background-color: #218380;
    border-radius: 5px;
    height: 40px;
    color: #fff;
    border: none;
    padding: 10px;
    cursor:pointer;
  }
`;

export const Content = styled.div`
  justify-content: center;
  align-items: center;
`;
