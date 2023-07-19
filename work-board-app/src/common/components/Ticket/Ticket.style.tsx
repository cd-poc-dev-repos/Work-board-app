import { Card } from "@mui/material";
import styled from "styled-components";

const Container = styled(Card)`
  width: 100%;
  border: none;
  height: 140px;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  height: 40px;
  padding: 10px;
  overflow: hidden;
  background-color: #fff;
`;

const HeaderContent = styled.p`
  margin: 0;
  color: #3E2F7F;
  font-size: 16px;
  text-align: left;
  font-weight: 700;
`;

const DetailContainer = styled.div`
  padding: 10px;
`;

const DetailContent = styled.p`
  font-size: 14px;
`;

export { Container, HeaderContainer, HeaderContent, DetailContainer, DetailContent };
