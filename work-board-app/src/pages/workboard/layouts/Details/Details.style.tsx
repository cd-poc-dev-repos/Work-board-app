import { TextField } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  width: 800px;
  display: flex;
  height: 500px;
  flex-direction: column;
  background-color: #fff;
`;

const Header = styled.div`
  height: 120px;
  display: flex;
  padding: 0 10px;
  column-gap: 20px;
  background-color: #fff;
  flex-direction: column;
  border-left: solid 12px #644EC5;
`;

const HeaderUpper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
`;

const HeaderId = styled.h3`
  color: #7469A3;
  font-size: 24px;
  font-weight: bold;
`;

const HeaderTitle = styled(TextField)`
  width: 100%;

  input {
    color: #644EC5;
    font-size: 24px;
    padding-left: 20px;
  }
`;

const HeaderLower = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ContentUpperContainer = styled.div`
  height: 50px;
  display: flex;
  padding: 0 10px;
  background-color: #F8F8F8;
`;

const ContentContainer = styled.div`
  height: 100%;
  padding: 20px;
  background-color: #fff;
`;

const Content = styled(TextField)`
  width: 100%;
  min-height: 240px;
  padding: 0 !important;

  textarea {
    height: 200px !important;
    background-color: #F8F8F8;
  }
`;

const SaveButton = styled.button`
  color: #fff;
  width: 95px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: #644EC5;

  &:hover {
    cursor: pointer;
    background-color: rgb(100, 78, 151);
  }
`;

export { Container, Header, HeaderUpper, HeaderId, HeaderTitle, HeaderLower, ContentUpperContainer, ContentContainer, Content, SaveButton };
