import React, { useState, useEffect } from "react";
import TutorialDataService  from "../service/TutorialService";

const UserList = () => {
    const [tutorials, setTutorials] = useState([]);
  
    useEffect(() => {
      retrieveTutorials();
    }, []);
  
    const retrieveTutorials = () => {
        TutorialDataService .getAllUser()
        .then(response => {
          setTutorials(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
  };

export default UserList;
