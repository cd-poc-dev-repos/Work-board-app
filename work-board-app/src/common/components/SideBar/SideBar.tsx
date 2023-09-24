import React from "react";
import { Link } from "react-router-dom";
import chartLogo from "../../../assets/svgs/chartlogo.png";
import workboardLogo from "../../../assets/svgs/workboardlogo.png";
import * as Styled from "./SideBar.style";

const SideBar = () => {
  return (
    <Styled.Container>
      <nav>
        <Styled.OptionsList>
          <Styled.Option>
            <Link to="/" title='Dashboard'><Styled.OptionIcon src={chartLogo} alt='dashboard' /></Link>
          </Styled.Option>
          <Styled.Option>
            <Link to="/workboard" title='Workboard'><Styled.OptionIcon src={workboardLogo} alt='workboard' /></Link>
          </Styled.Option>
        </Styled.OptionsList>
      </nav>
    </Styled.Container>
  );
};

export default SideBar;
