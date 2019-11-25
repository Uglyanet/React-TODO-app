import styled from 'styled-components';

export const StyledButton= styled.button`
    background-color: ${({theme})=>theme.primary};
    font-size: 16px;
    width: 250px;
    height:50px;
    display:flex;
    color: white;
    align-items: center;
    justify-content: center;
    border: none;
`;