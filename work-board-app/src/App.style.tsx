import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
`;

const Content = styled.div`
  width: calc(100% - 60px);
  background-color: #ededed;
`;

export { Container, Content };
