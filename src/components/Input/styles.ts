import styled from "styled-components";

export const InputContainer = styled.div`
    border-bottom: 1px solid #8647AD;
    padding-bottom: 10px;

    img {
        margin-right: 8px;
        color: #8647AD;
    }

    input {
        background: transparent;
        border: 0;
        font-size: 18px;
        color: #FFFFFF;
    }

    input::placeholder {
        color: #FFFFFF60;
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
    }

    input:focus{
        outline: none;
    }

    p {
        color: #FF00FF;
    }
`

export const ValidationContainer = styled.div`
    p {
        margin: -45px;
        color: #FF00FF;
    }
`