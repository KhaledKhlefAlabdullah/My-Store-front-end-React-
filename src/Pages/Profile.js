import { useContext } from "react";
import User_Section from "../Components/Profile_Components/User_Section";
import Get_Users_Section from "../Components/Profile_Components/Get_Users_Section"; 
import { Show_Context, Show_Provider } from "../Context/Show_Context";
export default function Profile() {
  const show = useContext(Show_Context);
 
  return (
    <Show_Provider>
      <User_Section />
       <Get_Users_Section /> 
    </Show_Provider>
  );
}
