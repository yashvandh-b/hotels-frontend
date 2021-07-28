import React from 'react'
import styled from 'styled-components';

export const HotelHeader = () => {
    return (<React.Fragment>
                <thead>
                    <tr>
                        <th>Hotel Id</th>
                        <th>Hotel Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>User Id</th>
                    </tr>
                </thead>
            </React.Fragment>)
}

export const LinkComponent = styled.a`
    background-color: white;
    color: blue;
    padding: 10px 20px;
    text-align: center;
    text-decoration: underline;
    display: inline-block;
    border: black;
  
    &:hover, &:active {
        background-color: blue;
        color: white;
        text-decoration: none;
    }
`;