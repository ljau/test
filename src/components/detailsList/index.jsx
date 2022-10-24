import React from 'react'
import { useLocation } from 'react-router-dom';
import { colors } from '../../lib/colors';
import BackButton from '../backButton';
import { DataContainer, DataItem, ListContainer } from '../todosList/styled';
import { DetailsBox } from './styled';

const DetailsList = () => {
  const {state} = useLocation();  
  const { id, title, completed } = state;

  return (
    <DetailsBox>
      <BackButton />
      <ListContainer>
        <DataContainer key={id}>
          <DataItem isTitle width="30%" bgColor={colors.blue} >Title</DataItem>
          <DataItem width="70%">{title}</DataItem>
        </DataContainer>
        <DataContainer>
        <DataItem isTitle width="30%" bgColor={colors.blue}>Completed</DataItem>
          <DataItem width="70%" bgColor={completed? colors.softGreen : colors.softRed}>
              {completed?"Yes":"No"}
          </DataItem> 
          </DataContainer>
      </ListContainer>
    </DetailsBox>
  )
}

export default DetailsList
