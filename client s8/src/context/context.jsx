import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext({
  serverUrl: 'http://localhost:4000',
  userDetails: {},
  setUserDetails: () => {},
  properties: [],
  setProperties: () => {},
  getProperties: () => {},
  bankOfficerFormValues: {},
  setBankOfficerFormValues: () => {},
  userFormValues: {},
  setUserFormValues: () => {}
});

const AppContextProvider = (props) => {
  const serverUrl = 'http://localhost:4000';
  // const serverUrl = import.meta.env.VITE_SERVER_URL;
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

  const [properties, setProperties] = useState([]); 

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
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);

  const [userFormValues, setUserFormValues] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
    phonenumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
});

const [bankOfficerFormValues, setBankOfficerFormValues] = useState({
  fullname: "",
  email: "",
  phonenumber: "",
  address: "",
  bankbranch: "",
  employeeid: "",
  position: "",
  uploadidproof: "",
  otpverification: "",
});

  return (
    <AppContext.Provider value={{
      serverUrl,
      userDetails,
      setUserDetails,
      properties,
      setProperties,
      getProperties,
      bankOfficerFormValues,
      setBankOfficerFormValues,
      userFormValues,
      setUserFormValues
    }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
