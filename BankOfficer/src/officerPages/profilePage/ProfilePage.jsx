import "./ProfilePage.scss";

import TopAuctioners from "../../dashComponent/auctioners/TopAuctioners";
import Latest from "../../dashComponent/LatestAssetsCards/latest";
import Sidebar from "../../dashComponent/Sidebar/Sidebar";
import News from "../../dashComponent/News & Updates/newsUpdate";
import Header from "../../dashComponent/nav/header/Header";
import CardsContainer from "../../dashComponent/Cards/Cards";

// Dummy data for assets
import { singlePostData } from "../../dummyData"; import AddNewAsset from "../../dashComponent/Add Asset/AddNewAsset";

const Profilepage = () => {
  const userAssets = singlePostData; // Initialize directly with the properties data

  // Function to get the latest asset based on auction date
  const getLatestAuctionAsset = () => {
    const currentDate = new Date(); // Get the current date
    const upcomingAssets = userAssets.filter(asset => {
      const auctionDate = new Date(asset.auctionDate); // Convert auction date to Date object
      return auctionDate >= currentDate; // Filter only upcoming auctions
    });

    // Sort the assets by auction date in ascending order (soonest auction first)
    const sortedAssets = upcomingAssets.sort((a, b) => new Date(a.auctionDate) - new Date(b.auctionDate));

    return sortedAssets.length > 0 ? sortedAssets[0] : null; // Return the first asset (soonest auction)
  };

  const latestAsset = getLatestAuctionAsset(); // Get the latest auction asset

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
          {latestAsset ? <Latest asset={latestAsset} /> : <AddNewAsset />}
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
