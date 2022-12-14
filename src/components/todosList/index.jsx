import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataContainer, DataItem, ListContainer } from "./styled";
import { colors } from "../../lib/colors";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faSquareXmark } from "@fortawesome/free-solid-svg-icons";

const TodosList = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState();
  useEffect(()  => {
    axios
      .get(process.env.REACT_APP_TODOS)
      .then((response) => setTodos(response.data));
  }, []);

  const ListHeader = () => {
    return (
    <DataContainer bgColor={colors.blue}>
      <DataItem width="15%" isTitle>
        ID
      </DataItem>
      <DataItem width="70%" margin="0%" isTitle>
        Title
      </DataItem>
      <DataItem isTitle>
        Completed
      </DataItem>
    </DataContainer>
    )
  }
  
  const TodosList = () => {
    return todos.map(item=>
      <DataContainer isItem key={item.id} bgColor={item.id%2? colors.softGrey : colors.mediumGrey}
      onClick={()=>navigate("/details",
        {state: {id: item.id, title: item.title, completed: item.completed}}
        )}>
        <DataItem width="15%">
          {item.id}
        </DataItem>
        <DataItem width="70%" >
          {item.title}
        </DataItem>
        <DataItem width="15%" font="bold">
          <FontAwesomeIcon icon={item.completed?faSquareCheck:faSquareXmark} color={item.completed?colors.green:colors.red}/>          
        </DataItem> 
      </DataContainer>
    ) 
  }
  const DisplayList = () => {
    return (                  
      <ListContainer>
        {ListHeader()}
        {TodosList()}
      </ListContainer>
    )
  }

  return (todos? DisplayList() : <></> );

};

export default TodosList;
