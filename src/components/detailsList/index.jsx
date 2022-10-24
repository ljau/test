import React from 'react'
import { useLocation } from 'react-router-dom';
import { colors } from '../../lib/colors';
import { DataContainer, DataItem, ListContainer } from '../todosList/styled';

const DetailsList = () => {
  const {state} = useLocation();  
  const { id, title, completed } = state;

  return (
    <ListContainer>
      <DataContainer key={id}>
        <DataItem isTitle width="25%">Title</DataItem>
        <DataItem width="75%">{title}</DataItem>
      </DataContainer>
      <DataContainer>
      <DataItem isTitle width="25%">Completed</DataItem>
        <DataItem width="75%" bgColor={completed? colors.softGreen : colors.softRed}>
            {completed?"Yes":"No"}
        </DataItem> 
        </DataContainer>
    </ListContainer>
  )
}

export default DetailsList
