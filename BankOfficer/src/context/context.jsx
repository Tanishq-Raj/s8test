import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    // auctionType: "",
    auctionDate: "",
    auctionTime: "",
    // area: "",
    price: "",
    description: "",
    contact: "",
    nearbyPlaces: "",
    // latitude: "",
    // longitude: "",
    address: {
      address: "",
      city: "",
      state: "",
      pincode: "",
    },
    auctionUrl: "",
    borrower: "",
    amountDue: "",
    deposit: "",
    bidInc: "",
    inspectDate: "",
    inspectTime: "",
    // message: "",
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  


  const value = {
    serverUrl,
    formData,
    setFormData,
    uploadedFiles,
    setUploadedFiles,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
