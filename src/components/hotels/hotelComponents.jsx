import styled from 'styled-components';

export const LinkButton = styled.a`
    background-color: white;
    color: blue;
    padding: 10px 20px;
    text-align: center;
    display: inline-block;
    border: 1px solid blue;
    text-decoration: none;
    border-radius: 10px;
  
    &:hover, &:active {
        color: white;
        background-color: blue;
    }
`;

export const AllButton = styled(LinkButton)`
    background-color: white;
    color: blue;
    
`;

export const BackButton = styled(LinkButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover, &:active {
        color: white;
        background-color: black;
    }
`;

export const AddButton = styled(LinkButton)`
    background-color: white;
    color: green;
    border: 1px solid green;

    &:hover, &:active {
        color: white;
        background-color: green;
    }
`;

export const EditButton = styled(LinkButton)`
    background-color: white;
    color: blue;
`;

export const SubmitButton = styled.button`
    background-color: white;
    color: green;
    padding: 10px 20px;
    text-align: center;
    display: inline-block;
    border: 1px solid black;
    text-decoration: none;
    border-radius: 10px;

    &:hover, &:active {
        color: white;
        background-color: green;
    }
`;

export const DeleteButton = styled(SubmitButton)`
    background-color: white;
    color: red;
    border: 1px solid red;

    &:hover, &:active {
        color: white;
        background-color: red;
    }
`;