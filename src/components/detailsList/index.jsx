import React from 'react'
import { useLocation } from 'react-router-dom';
import { colors } from '../../lib/colors';
import { DataContainer, DataItem } from '../todosList/styled';

const DetailsList = () => {
  const {state} = useLocation();  
  const { id, title, completed } = state;

  return (
    <>
    <DataContainer key={id}>
      <DataItem width="25%">Title</DataItem>
      <DataItem width="75%">{title}</DataItem>
    </DataContainer>
    <DataContainer>
    <DataItem width="25%">Completed</DataItem>
      <DataItem width="75%" bgColor={completed? colors.softGreen : colors.softRed}>
          {completed?"Yes":"No"}
      </DataItem> 
      </DataContainer>
      </>
  )
}

export default DetailsList
