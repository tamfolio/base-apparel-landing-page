import React from 'react'
import EmailBar from './EmailBar'
import { Base } from './styled/Base.styled'
import { Flex } from './styled/Flex.styled'

function Left() {
  return (
    <Base>
    <Flex>
    <img src="./images/logo.svg" alt="" />
    <h2><span>WE'RE </span> <br/> COMING <br/> SOON</h2>
    <p> Hello fellow shoppers! We're currently building our new <br/>fashion store. Add your email below to stay up-to-date with<br/> announcements and our launch deals.</p>
    <EmailBar/>
    </Flex>
  </Base>
  )
}

export default Left