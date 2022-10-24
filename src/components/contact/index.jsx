import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { CustomList, ListContainer, ListItem, ListLink } from './styled'
import { dataStored } from '../../lib/data'

const ContactDetails = () => {
  return (
    <ListContainer>
    <CustomList>
      <ListItem>CONTACT</ListItem>
      <ListItem><FontAwesomeIcon icon={faPhoneSquare}/> {dataStored.phone}</ListItem>
      <ListItem><FontAwesomeIcon icon={faEnvelope}/> {dataStored.email}</ListItem>      
      <ListItem>
        <FontAwesomeIcon icon={faLinkedin}/> <ListLink href={dataStored.linkedInLink} target="_blank">
        {dataStored.linkedIn}
        </ListLink>
      </ListItem>      
      <ListItem>
        <FontAwesomeIcon icon={faGithub}/><ListLink href={dataStored.githubLink} target="_blank">
          {dataStored.github}
        </ListLink>
      </ListItem>      
    </CustomList>
    </ListContainer>
  )
}

export default ContactDetails
