import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./SideBar.style";

const SideBar = () => {
  return (
    <Styled.Container>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/workboard">WorkBoard</Link>
          </li>
        </ul>
      </nav>
    </Styled.Container>
  );
};

export default SideBar;
