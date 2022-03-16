import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #333;
    margin: 0;
    padding: 0;

    @media(max-width: 700px){
        background-color: #fff;
        flex-direction: column;
        height: auto;
    }
`