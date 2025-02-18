import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const [editProperty, setEditProperty] = useState(false);
  const [propertyId, setPropertyId] = useState(null);

  // New state for tracking added and removed images
  const [newImages, setNewImages] = useState([]);
  const [removedImages, setRemovedImages] = useState([]);

  // const [formData, setFormData] = useState({
  //   title: "Prafull Sales Corporation:Residental Flat",
  //   category: "Residential",
  //   auctionType: "E-auction",
  //   auctionDate: "15/02/25",
  //   auctionTime: "12:00:00",
  //   area: "1832",
  //   price: "4836000",
  //   description:
  //     "All the part and parcel of land & building in the name of Prafull Sales Corporation: Residential Flat No. 705 admeasuring 1832 Sq. Ft. 7th floor, V. N. Pride, CTS No. 5984, S. No. 148/9, Nashik City-422003",
  //   contact: "8169178780",
  //   nearbyPlaces: "Dmart(1km away),AB School(200m away)",
  //   latitude: "1233",
  //   longitude: "123",
  //   address: {
  //     address:
  //       "Flat No. 705 , 7th floor, V. N. Pride, CTS No. 5984, S. No. 148/9",
  //     city: "Nashik",
  //     state: "Maharashtra",
  //     pincode: "422003",
  //   },
  //   auctionUrl: "https://baanknet.com",
  //   borrower: "M/s Prafull Sales",
  //   amountDue: "24055879",
  //   deposit: "10% of the reserve price",
  //   bidInc: "50000",
  //   inspectDate: "15/03/25",
  //   inspectTime: "12:00:00",
  //   reservPrice: "4836000",
  //   message:
  //     "All bidders are requested to visit the above site & complete the registration, KYC updation & payment 3 to 4 days before date of E-auction to avoid last minute rush",
  // });

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    auctionType: "",
    auctionDate: "",
    auctionTime: "",
    area: "",
    price: "",
    description: "",
    contact: "",
    nearbyPlaces: "",
    latitude: "",
    longitude: "",
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
    reservPrice: "",
    message: "",
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const value = {
    serverUrl,
    formData,
    setFormData,
    uploadedFiles,
    setUploadedFiles,
    editProperty,
    setEditProperty,
    newImages,
    setNewImages,
    removedImages,
    setRemovedImages,
    propertyId,
    setPropertyId,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
