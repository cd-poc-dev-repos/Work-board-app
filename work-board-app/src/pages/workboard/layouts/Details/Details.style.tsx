import { TextField } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 60px;
  padding: 10px;
  display: flex;
  column-gap: 20px;
  background-color: rgb(133, 195, 250);
`;

const HeaderTitle = styled(TextField)`
  width: 100%;
`;

const ContentContainer = styled.div`
  padding: 20px;
  background-color: #fff;
`;

const Content = styled(TextField)`
  min-height: 240px;
  min-width: 560px !important;

  textarea {
    height: 200px !important;
  }
`;

const Footer = styled.div`
  height: 60px;
  background-color: #fff;
  border-top: 1px solid black;
`;

export { Container, Header, HeaderTitle, ContentContainer, Content, Footer };
