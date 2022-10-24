import React from 'react'
import { dataStored } from '../../lib/data'
import BackButton from '../backButton'
import { DescriptionBox, DescriptionData, DescriptionTitle } from './styled'

const AboutInfo = () => {
  return (
    <>
      <BackButton />
      <DescriptionBox>      
        <DescriptionTitle>About Me</DescriptionTitle>
        <DescriptionData>{dataStored.about}</DescriptionData>
      </DescriptionBox>
    </>
  )
}

export default AboutInfo
