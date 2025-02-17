// not in use

import Header from "../../dashComponent/nav/header/Header"
import FilterOption from "../../dashComponent/propertyFilter/FilterOption"
import PropertyCardsList from "../../dashComponent/PropertyList/PropertyCardList"
import Sidebar from "../../dashComponent/Sidebar/Sidebar"
import "./auction.scss"

const Auction = () => {
  
  return (
    <div className="auction">
      <div className="sideContainerA">
      <Sidebar />
    </div>
    <div className="auctionContainer">
      <Header />
      <div className="auctionFilterContainer">
        {/* <FilterBar/> */}
        {/* <Filters /> */}
       <FilterOption/>
      </div>
      <div className="auctionCardContainer">
        <PropertyCardsList/>
      </div>
    </div>
    </div>
  )
}

export default Auction;
