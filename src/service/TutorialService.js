import http from "../service/common";


const getAllUser = () => {
    return http.get("User");
  };

const TutorialService  = {
    getAllUser
  };
  
export default TutorialService ;
