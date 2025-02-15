import "./MyAssetList.scss";
import { singlePostData } from "../../dummyData";
import { PropertyCards } from "../auction Cards/PropertyCards";

const MyAssetList = () => {
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
         <h3>Showing {singlePostData.length} results</h3>
       </div>
      <div className="cardsContainer2">
        {singlePostData.map((asset) => (
          <PropertyCards
          key={asset.id}
          id={asset.id}
          title={asset.title}
          address={asset.address}
          price={formatPrice(asset.price.replace(/,/g, ''))} // Ensure price is formatted properly            category={asset.category}
          bankName={asset.bankName}
          category={asset.category}
            area={asset.area}
            auctionDate={formatDate(asset.auctionDate)}
            image={asset.media && asset.media.length > 0 ? asset.media[0] : "default-image.jpg"} // Fixed syntax
            />
          ))}       
      </div>
    </div>
  );
};

export default MyAssetList;