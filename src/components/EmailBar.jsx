import React from 'react'
import { Email, EmailContainer } from './styled/EmailBar.styled'
import { FaChevronRight } from 'react-icons/fa'

function EmailBar() {
  return (
    <EmailContainer>
        <Email type="email" placeholder='Email Address' />
        <a href="/"><FaChevronRight/></a>
    </EmailContainer>
  )
}

export default EmailBar