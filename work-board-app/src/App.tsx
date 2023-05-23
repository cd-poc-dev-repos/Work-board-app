import React from 'react';
import SideBar from './common/components/SideBar';
import SiteHeader from './common/components/SiteHeader';
import * as Styled from './App.style';
import './App.css';

function App() {
  return (
    <div className="App">
      <SiteHeader />
        <Styled.Container>
          <SideBar />
          <Styled.Content>board</Styled.Content>
        </Styled.Container>
    </div>
  );
}

export default App;
