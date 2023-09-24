import styled from 'styled-components';

const Container = styled.div`
  border: none;
  margin: 0 60px;
  background-color: #EEEEEE;
  
  margin: 0px 15px !important; 
`;

const DroppableArea = styled.div`
  width: 240px !important;
  border: none !important;
  padding: 10px 0 !important;
`;

const HeaderContainer = styled.div`
  height: 40px;
  background-color: #fff;
`;

const HeaderContent = styled.h3`
  color: #3E2F7F;
  font-size: 16px;
  padding-top: 7px;
  font-weight: 500;
`;

export { Container, DroppableArea, HeaderContainer, HeaderContent }