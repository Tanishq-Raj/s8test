import PropTypes from "prop-types"; // Import PropTypes for type validation
import "./latest.scss";
import { useMemo } from "react";

function Latest({ asset }) {

  const daysLeft = useMemo(() => {
    const auctionDate = new Date(asset.auctionDate);
    const today = new Date();
    const timeDiff = auctionDate - today;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
  }, [asset.auctionDate]);

  return (
    <div className="cardContainer">
      <div className="cardImageContainer">
        <img
          loading="lazy"
          src={asset.imageUrl}
          className="cardImage"
          alt={asset.title}
        />
        <div className="cardTitle">Your latest asset</div>
        {/* <div className="cardDaysLeft">{`Auction starts on: ${asset.auctionDate}`}</div> */}
        <div className="cardDaysLeft">{daysLeft > 0 ? `Days left: ${daysLeft}` : "Ongoing"}
        </div>
      </div>
      <div className="cardDescription">
        {asset.title}
      </div>
      <div className="cardDetails">
        <div className="detailAddress">
          <div>{asset.address}</div>
          <div className="detailDate">{asset.auctionDate}</div>
        </div>
        <div tabIndex="0" role="button" className="detailButton">View</div>
      </div>
    </div>
  );
}

// PropTypes for the 'asset' prop
Latest.propTypes = {
  asset: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    auctionDate: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default Latest;
