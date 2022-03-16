import styled from 'styled-components'

export const Email = styled.input`
    width: 300px;
    padding: 15px 25px;
    border: 1px solid  hsl(0, 36%, 70%);
    border-radius: 40px;
    margin-top: 10px;

    &::placeholder{
        font-size: 15px;
        color: hsl(0, 36%, 70%);
        font-weight: 400;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 3px;
    }

    &:focus{
        border: 3px solid hsl(0, 93%, 68%);
        outline: none;
    }
    @media(max-width: 700px){
        width: 250px;
        display: flex;
        align-self: center;
    }

`


export const EmailContainer = styled.div`
    display: flex;


    & > a{
        color: #fff;
        display: inline-flex;
        padding: 8px 25px;
        border-radius: 30px;
        background-color: hsl(0, 93%, 68%);
        margin-left: -65px;
        margin-top: 5px;
        align-items: center;
        justify-content: center;
    }

    & > a:hover{
        background-color: hsl(0, 36%, 70%);
    }
`