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
    background-color: black;
    color: white;
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