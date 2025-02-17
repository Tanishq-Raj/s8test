import { useContext, useEffect, useState } from "react";
import GMap from "../../dashComponent/map(Google)/Gmap";
import Header from "../../dashComponent/nav/header/Header";
import Sidebar from "../../dashComponent/Sidebar/Sidebar";
import SingleHeader from "../../dashComponent/singlePage Header/singleHeader";
import Slider from "../../dashComponent/slider/Slider";
import axios from "axios";
// import Map from "../../dashComponent/map/Map"; // Import Map component

import { singlePostData } from "../../dummyData"; 
import "./single.scss";
import { useParams } from "react-router-dom"; 
import { AppContext } from "../../context/context";

const Single = () => {
  const { id } = useParams(); // Get ID from the URL
  const post = singlePostData[0]; // Find matching property
  
  const {serverUrl} = useContext(AppContext);
  const [property, setProperty] = useState(null);

  useEffect(() => {
    getPropertyById();
  }, [])

  const getPropertyById = async () => {
    try {
      const {data} = await axios.post(serverUrl + "/api/v1/bank-user/get-property-by-id", {id}, {
        withCredentials: true,
      });

      if (data.success) {
        setProperty(data.property);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }}

  if (!post) {
    return <h2>Property Not Found!</h2>; // If ID is invalid
  }

  const media = property?.image?.map(item => item.url) || [];

  const pageName = "My Assets";

  return property && (
    <div className="singlePage">
      <div className="sideContainerS">
        <Sidebar />
      </div>
      <div className="singlePageContainer">
        {/* Main Header */}
        <Header />
         
         <div className="mainSContainer">
        {/* Single Page Header (Centered Above Both Sections) */}
        <SingleHeader pageName={pageName} title={property.title} />

        {/* Main Content Container */}
         <div className="mainSinglePage">
          {/* Left Side - Property Details */}
          <div className="leftSide">
            <div className="details">
              <Slider media={media} />
       <div className="info">
  <div className="info-column">
    <h1>{property.title}</h1>
    <div className="info-item">
      <img src="/pin.svg" alt="location" className="info-icon" />
      <span className="info-label">Address:</span>
      <span className="info-value">{property.address?.address}, {property.address?.city}, {property.address?.state} - {property.address?.pincode}</span>
      
    </div>

    <div className="info-item">
      <img src="/price-tag.svg" alt="price" className="info-icon" />
      <span className="info-label">Price:</span>
      <span className="info-value highlight">₹ {property.price}</span>
    </div>

    <div className="info-item">
      <img src="/link.svg" alt="link" className="info-icon" />
      <span className="info-label">Enquiry URL:</span>
      <a href={property.auctionUrl} className="info-link">{property.auctionUrl}</a>
    </div>

    <div className="info-item description">
      <img src="/description.svg" alt="description" className="info-icon" />
      <span className="info-label">Description:</span>
      <p className="info-value">{property.description}</p>
    </div>
  </div>
</div>
         </div>
        </div>

          {/* Right Side - Auction Details & Map */}
          <div className="rightSide">
            {/* Auction & Property Details */}
            <div className="auctionDetails">
  <div className="auction-column">
    <div className="auctionItem">
      <span className="label">Area:</span>
      <span className="value">{property.area} sq.ft</span>
    </div>
    <div className="auctionItem">
      <span className="label">Category:</span>
      <span className="value">{property.category}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Borrowers:</span>
      <span className="value">{property.borrower}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Bank Name:</span>
      <span className="value">{property.bankName.toUpperCase()}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Amount Due:</span>
      <span className="value">{property.amountDue}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Reserve Price:</span>
      <span className="value">{property.reservPrice}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Earnest Money Deposit:</span>
      <span className="value">{property.deposit}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Bid Increase Amount</span>
      <span className="value">{property.bidInc}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Contact No.:</span>
      <span className="value">{property.contact}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Auction Type:</span>
      <span className="value">{property.auctionType}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Auction Date:</span>
      <span className="value">{property.auctionDate}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Auction Time:</span>
      <span className="value">{property.auctionTime}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Nereby Places:</span>
      <span className="value">{property.nearbyPlaces}</span>
    </div>
    <div className="auctionItem">
      <span className="label">City:</span>
      <span className="value">{property.address.city}</span>
    </div>
    <div className="auctionItem">
      <span className="label">State:</span>
      <span className="value">{property.address.state}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Message:</span>
      <span className="value highlight">{property.message}</span>
    </div>
   
  </div>
</div>


            {/* Map Section */}
            <h3>Property Location :</h3>
            <GMap
                items={[
                  {
                    id: post.id,
                    latitude: post.latitude,
                    longitude: post.longitude,

                    /*if pin marker box is using then use bellow code*/

                    // img: post.media[0], // ✅ Fixed Here
                    // title: post.title,
                    // category: post.category,
                    // price: parseInt(post.price.replace(/,/g, ""), 10),
                  },
                ]}
              />

            {/* Action Buttons */}
            <div className="actionButtons">
            <button className="delete">
              <img src="/delete2.svg" alt="Delete" className="button-icon" />
              Delete
            </button>
            <button className="edit">
              <img src="/edit.svg" alt="Edit" className="button-icon" />
               Edit
            </button>
            <button className="done">
              <img src="/done.svg" alt="Done" className="button-icon" />
                Done
            </button>
            </div>

          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
