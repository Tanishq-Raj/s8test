import "./ProfilePage.scss";

// import TopAuctioners from "../../dashComponent/auctioners/TopAuctioners";
import Latest from "../../dashComponent/LatestAssetsCards/latest";
import Sidebar from "../../dashComponent/Sidebar/Sidebar";
import News from "../../dashComponent/News & Updates/newsUpdate";
import Header from "../../dashComponent/nav/header/Header";
import CardsContainer from "../../dashComponent/Cards/Cards";
import AddNewAsset from "../../dashComponent/Add Asset/AddNewAsset";

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import axios from "axios";

const Profilepage = () => {
  const { serverUrl, properties, setProperties } = useContext(AppContext);
  const [latestAsset, setLatestAsset] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data } = await axios.get(`${serverUrl}/api/v1/bank-user/get-property`, {
          withCredentials: true,
        });
        if (data.success) {
          setProperties(data.properties);
          const latest = getLatestAuctionAsset(data.properties);
          setLatestAsset(latest);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, [serverUrl, setProperties]);

  // Function to get the latest asset based on auction date
  const getLatestAuctionAsset = (userAssets) => {
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
          {/* <TopAuctioners /> */}
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
