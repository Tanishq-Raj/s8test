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


  const value = {
    serverUrl,bankOfficerFormValues, setBankOfficerFormValues, userFormValues, setUserFormValues,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
