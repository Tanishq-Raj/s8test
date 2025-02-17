import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
// import properties from "../../dummyData"; // Import your dummy data
import './myAssetsCards.scss';
import { AppContext } from '../../context/context';
import axios from 'axios';

const MyAssetsCards = () => {
  const [showAll, setShowAll] = useState(false); // State to control whether to show all cards
  const [properties, setProperties] = useState([]); // State to store properties
  const { serverUrl } = useContext(AppContext);
  const navigate = useNavigate();
 
  // Number of cards to show by default
  const defaultCardsToShow = 3;
  const cardsToDisplay = showAll ? properties : properties.slice(0, defaultCardsToShow);
  
  useEffect(() => {
    getProperties();
  }, []);

  // Function to get properties
  const getProperties = async () => {
    try {
      const { data } = await axios.get( serverUrl + "/api/v1/bank-user/get-property", {
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

  return (
    <div className="myAssetsCardsContainer">
      <div className="headerContainer2">
        <h2>My Assets</h2>
        <h3>Showing {cardsToDisplay.length} / {properties.length} results</h3>
      </div>
      <div className="cardsScrollContainer">
        <div className="assetsList">
          {cardsToDisplay.map((property) => (
            <div key={property._id} className="assetCard">
              <div className="cardHeader">
                <img src={property.image[0].url} alt={property.title} className="propertyImage" />
                <div className="userImageContainer">
                  <img src={property.profileImage} alt="User" className="userImage" />
                </div>
              
              </div>
              <div className="cardBody">
                <h4>{property.title}</h4>
                <p>{property.address?.address}, {property.address?.city}, {property.address?.state} - {property.address?.pincode}</p>
                <p>{property.auctionDate}</p>
                <div onClick={() => navigate(`/property/${property._id}`)} className="viewButton">View now</div>
                {/* Corrected Link for navigation */}
                {/* <Link to={`/property/${property.id}`} className="viewButton">View now</Link> */}
              </div>
              {/* <div className="cardFooter">
                 <Link to={`/property/${property.id}`} className="viewButton">View now</Link>
              </div> */}
            </div>
          ))}
        </div>

        {/* "View All" button outside the scrollable container */}
        <div className="viewAllButton">
          {!showAll && (
            <button onClick={() => setShowAll(true)}>
              <Link to="/view">View All</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAssetsCards;
