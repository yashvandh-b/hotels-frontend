import styled from 'styled-components';

export const PaginationList = styled.li`
    
    width: 100%;
    height: 40px;
    list-style: none;
    display: inline;
    justify-content: center;

`;

export const PaginationButton = styled.a`
    background-color: white;
    color: #2b2eff;
    padding: 10px 20px;
    text-align: center;
    display: inline-block;
    border: #2b2eff 1px solid;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 8px;
    
    &:hover, &:active {
        color: white;
        background-color: #2b2eff;
}
`;