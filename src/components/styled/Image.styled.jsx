import styled from 'styled-components'

export const Image = styled.div `
    width: 30%;
    height: 80vh;

    img{
        width: 90%;
        height: 80vh;
    }

    @media(max-width: 700px){
        display: none;
    }
`