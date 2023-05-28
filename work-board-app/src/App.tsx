import React from 'react';
import SideBar from './common/components/SideBar';
import SiteHeader from './common/components/SiteHeader';
import * as Styled from './App.style';
import WorkBoard from './pages/workboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <SiteHeader />
        <Styled.Container>
          <SideBar />
          <Styled.Content>
            <WorkBoard />
          </Styled.Content>
        </Styled.Container>
    </div>
  );
}

export default App;
