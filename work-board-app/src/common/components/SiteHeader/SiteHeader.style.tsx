import styled from 'styled-components';

const Container = styled.header`
  height: 60px;
  display: flex;
  margin: 0 50px 0 0;
  align-items: center;
  background-color: #fff;
  padding: 10px 30px 10px 50px;
  justify-content: space-between;
`;

const Title = styled.h3`
  color: #3E2F7F;
  font-size: 24px;
  font-weight: 400;
`;

const Button = styled.button`
  color: #fff;
  height: 50px;
  width: 120px;
  border: none;
  font-size: 15px;
  font-weight: bold;
  border-radius: 12px;
  background-color: #644EC5;

  &:hover {
    cursor: pointer;
    background-color: rgb(100, 78, 151);
  }
`;

export { Container, Title, Button }