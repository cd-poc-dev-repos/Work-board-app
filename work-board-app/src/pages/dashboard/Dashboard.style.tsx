import styled from "styled-components";

const Container = styled.div``;

const Header = styled.div`
  margin: 0;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px 30px 10px 50px;
  justify-content: space-between;
`;

const Title = styled.h3`
  color: #3e2f7f;
  font-size: 24px;
  font-weight: 400;
`;

const ChartTileContainer = styled.div`
  display: flex;
  padding: 20px;
  column-gap: 20px;
  flex-direction: row;
  justify-content: flex-start;
`;

const ChartTile = styled.div`
  max-width: 300px;
  max-height: 300px;
  background: #fff;
`;

export { Container, Header, Title, ChartTileContainer, ChartTile };
