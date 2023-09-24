import { Link } from "react-router-dom"
import styled from 'styled-components';

const Container = styled.nav`
    width: 60px;
    background-color: #644EC5;
`;

const OptionsList = styled.ul`
    padding: 0;
    list-style: none;
`;

const Option = styled.li`
    margin-bottom: 20px;

    &:hover {
        background-color: #e2d5f4;
    }
`;

const OptionIcon = styled.img`
    width 35px;
`;

export { Container, OptionsList, Option, OptionIcon }
