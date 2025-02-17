// not in use

import CardsContainer from "../Cards/Cards";
import "./list.scss"

const List = () => {
  return (
    <div className="listContainer">
    <div className="auctionsTitle">Latest Auctions</div>
      <CardsContainer/>
    </div>
  );
};

export default List;
