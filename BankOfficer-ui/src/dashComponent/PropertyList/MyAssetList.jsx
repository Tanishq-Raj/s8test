import "./MyAssetList.scss";
import properties from "../../dummyData";
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
         <h3>Showing {properties.length} results</h3>
       </div>
      <div className="cardsContainer2">
        {properties.map((property) => (
          <PropertyCards
            key={property.id}
            id={property.id}
            title={property.title}
            address={property.address}
            price={formatPrice(property.price)}
            category={property.category}
            bankName={property.bankName}
            area={property.area}
            auctionDate={formatDate(property.auctionDate)}
            imageUrl={property.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default MyAssetList;