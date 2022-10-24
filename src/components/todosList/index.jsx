import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataContainer, DataItem } from "./styled";
import { colors } from "../../lib/colors";
import { useNavigate } from "react-router-dom";
const TodosList = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState();
  useEffect(()  => {
    axios
      .get(process.env.REACT_APP_TODOS)
      .then((response) => setTodos(response.data));
  }, []);
  
  const DisplayList = () => {
    return todos.map(item=>
      <DataContainer key={item.id} >
        <DataItem width="15%">
          {item.id}
        </DataItem>
        <DataItem width="70%" margin="0%" isTitle onClick={()=>navigate("/details",
        {state: {id: item.id, title: item.title, completed: item.completed}}
        )}>
          {item.title}
        </DataItem>
        <DataItem width="15%" bgColor={item.completed? colors.softGreen : colors.softRed}>
          {item.completed?"Yes":"No"}
        </DataItem> 
      </DataContainer>
      )
  }

  return (todos? DisplayList() : <></> );

};

export default TodosList;
