import styled from 'styled-components'

export const Base = styled.div`
    width: 40%;
    background: url('./images/bg-pattern-desktop.svg');
    height: 80vh;
    background-color: #fff;
    background-position: center;
    background-repeat:repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;   

    @media(max-width: 700px){
        width: 100%;
        background: none;
        margin: o;
        padding: 0;
        height: auto;
    } 
`