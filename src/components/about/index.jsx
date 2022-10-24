import React from 'react'
import { dataStored } from '../../lib/data'
import { DescriptionBox, DescriptionData, DescriptionTitle } from './styled'

const AboutInfo = () => {
  return (
    <DescriptionBox>      
      <DescriptionTitle>About Me</DescriptionTitle>
      <DescriptionData>{dataStored.about}</DescriptionData>
    </DescriptionBox>
  )
}

export default AboutInfo
