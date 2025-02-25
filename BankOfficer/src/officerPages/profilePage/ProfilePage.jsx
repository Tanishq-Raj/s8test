import "./ProfilePage.scss";

import TopAuctioners from "../../dashComponent/auctioners/TopAuctioners";
import Latest from "../../dashComponent/LatestAssetsCards/latest";
import Sidebar from "../../dashComponent/Sidebar/Sidebar";
import News from "../../dashComponent/News & Updates/newsUpdate";
import Header from "../../dashComponent/nav/header/Header";
import CardsContainer from "../../dashComponent/Cards/Cards";
import AddNewAsset from "../../dashComponent/Add Asset/AddNewAsset";

// Dummy data for assets
import { singlePostData } from "../../dummyData"; 
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import axios from "axios";

const Profilepage = () => {
  const userAssets = singlePostData; // Initialize directly with the properties data
  const { serverUrl, properties, setProperties } = useContext(AppContext);


  // Function to get the latest asset based on auction date
  const getLatestAuctionAsset = () => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Ensure we compare only the date part
    
    const upcomingOrOngoingAssets = userAssets.filter(asset => {
      const auctionDate = new Date(asset.auctionDate);
      auctionDate.setHours(0, 0, 0, 0); // Remove time for accurate date comparison
      return auctionDate >= currentDate; // Include both today’s and future auctions
    });

  // Sort the assets by auction date in ascending order (soonest first)
  const sortedAssets = upcomingOrOngoingAssets.sort(
    (a, b) => new Date(a.auctionDate) - new Date(b.auctionDate)
  );

  return sortedAssets.length > 0 ? sortedAssets[0] : null; 
};

  // const latestAsset = properties ? properties[0] : false
  const latestAsset = true

  return (
    <div className="home">
      <div className="sideContainer">
        <Sidebar />
      </div>
      <div className="homeContainer">
        <Header />

        {/* Separator placed correctly */}
        {/* <div className="separator2"></div> */}

        <div className="latestAssetContainer">
          { latestAsset && latestAsset ? <Latest /> : <AddNewAsset />}
          <News />
        </div>
        <div className="auctionersContainer">
          <CardsContainer />
          <TopAuctioners />
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
