import GMap from "../../dashComponent/map(Google)/Gmap";
import Header from "../../dashComponent/nav/header/Header";
import Sidebar from "../../dashComponent/Sidebar/Sidebar";
import SingleHeader from "../../dashComponent/singlePage Header/singleHeader";
import Slider from "../../dashComponent/slider/Slider";
// import Map from "../../dashComponent/map/Map"; // Import Map component

import { singlePostData } from "../../dummyData"; 
import "./single.scss";
import { useParams } from "react-router-dom"; 

const Single = () => {
  const { id } = useParams(); // Get ID from the URL
  const post = singlePostData.find(item => item.id === parseInt(id)); // Find matching property

  if (!post) {
    return <h2>Property Not Found!</h2>; // If ID is invalid
  }

  const pageName = "My Assets";
  const title = post.title;

  return (
    <div className="singlePage">
      <div className="sideContainerS">
        <Sidebar />
      </div>
      <div className="singlePageContainer">
        {/* Main Header */}
        <Header />
         
         <div className="mainSContainer">
        {/* Single Page Header (Centered Above Both Sections) */}
        <SingleHeader pageName={pageName} title={title} />

        {/* Main Content Container */}
         <div className="mainSinglePage">
          {/* Left Side - Property Details */}
          <div className="leftSide">
            <div className="details">
              <Slider media={post.media} />
       <div className="info">
  <div className="info-column">
    <h1>{post.title}</h1>
    <div className="info-item">
      <img src="/pin.svg" alt="location" className="info-icon" />
      <span className="info-label">Address:</span>
      <span className="info-value">{post.address}</span>
    </div>

    <div className="info-item">
      <img src="/price-tag.svg" alt="price" className="info-icon" />
      <span className="info-label">Price:</span>
      <span className="info-value highligh">₹ {post.price}</span>
    </div>

    <div className="info-item">
      <img src="/link.svg" alt="link" className="info-icon" />
      <span className="info-label">Enquiry URL:</span>
      <a href={post.enquiryUrl} className="info-link">{post.enquiryUrl}</a>
    </div>

    <div className="info-item description">
      <img src="/description.svg" alt="description" className="info-icon" />
      <span className="info-label">Description:</span>
      <p className="info-value">{post.description}</p>
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
      <span className="value">{post.area} sq.ft</span>
    </div>
    <div className="auctionItem">
      <span className="label">Category:</span>
      <span className="value">{post.category}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Borrowers:</span>
      <span className="value">{post.borrower}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Bank Name:</span>
      <span className="value">{post.bankName}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Amount Due:</span>
      <span className="value">{post.dueAmount}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Reserve Price:</span>
      <span className="value">{post.reservPrice}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Earnest Money Deposit:</span>
      <span className="value">{post.deposit}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Bid Increase Amount</span>
      <span className="value">{post.bidInc}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Contact No.:</span>
      <span className="value">{post.contactNo}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Auction Type:</span>
      <span className="value">{post.auctionType}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Auction Date:</span>
      <span className="value">{post.auctionDate}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Auction Time:</span>
      <span className="value">{post.time}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Nereby Places:</span>
      <span className="value">{post.nearbyPlace}</span>
    </div>
    <div className="auctionItem">
      <span className="label">City:</span>
      <span className="value">{post.city}</span>
    </div>
    <div className="auctionItem">
      <span className="label">State:</span>
      <span className="value">{post.state}</span>
    </div>
    <div className="auctionItem">
      <span className="label">Message:</span>
      <span className="value highlight">{post.message}</span>
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
