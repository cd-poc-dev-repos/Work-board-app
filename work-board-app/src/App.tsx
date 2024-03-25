import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./common/components/SideBar";
import WorkBoard from "./pages/workboard";
import Dashboard from "./pages/dashboard";
import * as Styled from "./App.style";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Styled.Container>
          <SideBar />
          <Styled.Content>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/workboard" element={<WorkBoard />} />
            </Routes>
          </Styled.Content>
        </Styled.Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
