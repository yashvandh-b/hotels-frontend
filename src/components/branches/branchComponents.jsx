import React from 'react'
import styled from 'styled-components'

export const BranchHeader = () => {
    return (<React.Fragment>
                <thead>
                    <tr>
                        <th>Branch Id</th>
                        <th>Hotel Id</th>
                        <th>Branch Name</th>
                        <th>Location</th>
                        <th>Manager Name</th>
                        <th>Manager Phone</th>
                        <th></th>
                    </tr>
                </thead>
            </React.Fragment>)
}

export const BackButton = styled.a`
    background-color: white;
    color: black;
    padding: 10px 20px;
    text-align: center;
    display: inline-block;
    border: 1px solid black;
    text-decoration: none;
    border-radius: 10px;
  
    &:hover, &:active {
        color: white;
        background-color: black;
    }
`;

export const SubmitButton = styled.button`
    background-color: white;
    color: green;
    padding: 10px 20px;
    text-align: center;
    display: inline-block;
    border: green 1px solid;
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
    &:hover, &:active {
        background-color: red;
    }
`;