import { Card } from "@mui/material";
import styled from "styled-components";

const Container = styled(Card)`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  height: 40px;
  padding: 10px;
  overflow: hidden;
  background-color: #85c3fa;
`;

const HeaderContent = styled.p`
  margin: 0;
  font-size: 16px;
`;

const DetailContainer = styled.div`
  padding: 10px;
`;

const DetailContent = styled.p`
  font-size: 14px;
`;

export { Container, HeaderContainer, HeaderContent, DetailContainer, DetailContent };
