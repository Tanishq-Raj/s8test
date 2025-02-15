import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  const [formData, setFormData] = useState({
    title: "new",
    category: "Residential",
    // auctionType: "",
    auctionDate: "12/02/25",
    auctionTime: "12:00:00",
    // area: "",
    price: "4324",
    description: "New Property",
    contact: "534534534543",
    nearbyPlaces: "mumbai",
    // latitude: "",
    // longitude: "",
    address: {
      address: "new",
      city: "mum",
      state: "maha",
      pincode: "400000",
    },
    auctionUrl: "try.com",
    borrower: "borrower",
    amountDue: "43",
    deposit: "32",
    bidInc: "32",
    inspectDate: "12/02/25",
    inspectTime: "12:00:00",
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
