import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const LoginContainer = styled.div`
    height: 550px;
    width: 550px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    border: 2px solid #8647AD;
    border-radius: 27px;

    h1 {
        letter-spacing: 15px;
        color: #8647AD;
    }
`