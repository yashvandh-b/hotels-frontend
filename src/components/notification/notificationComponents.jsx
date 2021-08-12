import styled from 'styled-components';

export const NotificationComponent = styled.div`
    background-color: #444;
    color: white;
    padding: 16px;
    position: absolute;
    top: ${props => props.top}px;
    right: 16px;
    transition: top 0.5s ease;
    hidden: true;
`