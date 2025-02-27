import { createContext, useState } from "react";

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
