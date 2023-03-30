import styled from "styled-components";

export const ButtonContainer = styled.button`    
    display: flex;
    align-items: center;
    justify-content: center;

    width: 240px;
    height: 41px;

    border: 2px solid #8647AD;
    border-radius: 27px;

    cursor: pointer;
    
    &:enabled {
        background-color: transparent;
        color: #FFFFFF;
    }
`