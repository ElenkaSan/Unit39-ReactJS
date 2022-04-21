import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

const BoxList = () => {
    // const INITIAL_STATE = [
    //     { id: uuid(), width: 100, height: 85, color: "yellow" },
    //     { id: uuid(), width: 90, height: 80, color: "purple" }
    //   ]
    // const [lists, setLists] = useState(INITIAL_STATE);
    const [lists, setLists] = useState([]);

    const addBox = lists => {
        let newBox = { ...lists, id: uuid() };
        setLists(lists => [...lists, newBox]);
    };

    const removing = (idBox) => {
        setLists(lists.filter(({ id }) => id !== idBox));
    };
    
   return (
     <div>
          <h3>Create The Color Box</h3>
       <NewBoxForm addingBox={addBox} />
       {lists.map(({ id, width, height, color }) =>
       <Box remove={removing} key={id} id={id} width={width} height={height} color={color} />
       )}
     </div>
   )
};

export default BoxList;
