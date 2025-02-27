import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    bankBranch: "",
    empId: "",
    designation: "",
  });

  const [properties, setProperties] = useState([]); // Add this line

  const getProperties = async () => {
    try {
      const { data } = await axios.get( serverUrl + "/api/v1/user/get-properties", {
        withCredentials: true,
      });
      if (data.success) {
        setProperties(data.properties);
      }else{
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProperties();
  }, []);
  
  const value = {
    serverUrl,
    userDetails,
    setUserDetails,
    properties,  // Add this line
    setProperties,  // Add this line
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
