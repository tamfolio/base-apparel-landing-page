import styled from 'styled-components'

export const Flex = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap');
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left:150px;
    padding-top: 50px;
    font-family: 'Josefin Sans', sans-serif;


    & > h2{
        font-size: 40px;
        font-weight: 600;
        margin-top: 80px;
        letter-spacing: 8px;
        color: #333;
    }

    & > h2 > span {
        color: hsl(0, 36%, 70%) ;
        font-weight: 300;
    }

    & > p{
        color: hsl(0, 36%, 70%) ;
        font-size: 15px;
        margin-top: -10px;
        padding-right: 20px;
        font-weight: 500;
    }


    @media(max-width: 700px){
        padding: 0;
        

        & > h2{
            text-align: center;
            margin-top: 40px;
        }

        & > p{
            text-align: center;
            font-size: 14px;
            line-height: 1.5;
            padding: 0 15px;
        }
    }
`