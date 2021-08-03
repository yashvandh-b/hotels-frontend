import styled from 'styled-components';


export const LinkButton = styled.a`
    background-color: white;
    color: blue;
    padding: 10px 20px;
    text-align: center;
    display: inline-block;
    border: black;
    text-decoration: none;
    border-radius: 10px;
  
    &:hover, &:active {
        color: red;
    }
`;


export const AllButton = styled(LinkButton)`
    background-color: blue;
    color: white;
    
`;

export const BackButton = styled(LinkButton)`
    background-color: black;
    color: white;
`;

export const AddButton = styled(LinkButton)`
    background-color: green;
    color: white;
    &:hover, &:active {
        color: black;
    }
`;

export const EditButton = styled(LinkButton)`
    background-color: blue;
    color: white;
`;

export const SubmitButton = styled.button`
    background-color: green;
    color: white;
    padding: 10px 20px;
    text-align: center;
    display: inline-block;
    border: black;
    text-decoration: none;
    border-radius: 10px;

    &:hover, &:active {
        color: black;
    }
`;

export const DeleteButton = styled(SubmitButton)`
    background-color: red;
    color: white;
`;