import "./MyAssetList.scss";
import { singlePostData } from "../../dummyData";
import { PropertyCards } from "../auction Cards/PropertyCards";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { AppContext } from "../../context/context";

const MyAssetList = () => {
  const [properties, setProperties] = useState(singlePostData);
  const {serverUrl} = useContext(AppContext)

  useEffect(() => {
    getProperties();
  }, []);

  // Function to get properties
  const getProperties = async () => {
    try {
      const { data } = await axios.get( serverUrl + "/api/v1/bank-user/get-property", {
        withCredentials: true,
      });
      console.log(data);
      if (data.success) {
        setProperties(data.properties);
        console.log(data.properties);
      }else{
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  // Format price with proper currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { // Changed to Indian format
    //   style: 'currency',
    //   currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Format date as MM/DD/YYYY
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
  };

  return (
    <div className="propertyCardsWrapper">
       <div className="sectionTitle">
         <h2>My Assets</h2>
         <h3>Showing {properties.length} results</h3>
       </div>
      <div className="cardsContainer2">
        {properties.map((asset) => (
          <PropertyCards
          key={asset._id}
          id={asset._id}
          title={asset.title}
          address={<p>{asset.address?.address}, {asset.address?.city}, {asset.address?.state} - {asset.address?.pincode}</p>}
          // price={formatPrice(asset.price.replace(/,/g, ''))} // Ensure price is formatted properly            category={asset.category}
          price={asset.price} // Ensure price is formatted properly            category={asset.category}
          bankName={asset.bankName.toUpperCase()}
          category={asset.category}
            area={asset.area}
            auctionDate={asset.auctionDate}
            // image={asset.media && asset.media.length > 0 ? asset.media[0] : "default-image.jpg"} // Fixed syntax
            image={asset.image?.[0]?.url || "default-image.jpg"}

            />
          ))}       
      </div>
    </div>
  );
};

export default MyAssetList;