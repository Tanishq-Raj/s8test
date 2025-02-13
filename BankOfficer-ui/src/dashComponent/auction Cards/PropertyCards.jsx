
// Using for My Asset List
import "./propertyCards.scss";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export const PropertyCards = ({
  id,
  title,
  address,
  price,
  category,
  bankName,
  area,
  auctionDate,
  imageUrl,
}) => {
  return (
    <article className="propertyCard">
      <div className="imageContainer">
        <img
          loading="lazy"
          src={imageUrl}
          alt={`Property view of ${title}`}
          className="propertyImage"
        />
      </div>
      <div className="contentContainer">
        <h2 className="propertyTitle">{title}</h2>
        <div className="propertyDetails">
          <div className="propertyDetail">
            <span className="label">Address:</span>
            <span className="value addressValue">{address}</span>
          </div>
          <div className="propertyDetail">
            <span className="label">Price:</span>
            <span className="value">₹{price}</span>
          </div>
          <div className="propertyDetail">
            <span className="label">Category:</span>
            <span className="value">{category}</span>
          </div>
        </div>
        <div className="bankInfo">
          <span className="bankLabel">Bank Name:</span>
          <span className="bankValue">{bankName}</span>
        </div>
        <div className="areaInfo">
          <span className="areaLabel">Area:</span>
          <span className="areaValue">{area}</span>
        </div>
        <div className="dateInfo">
          <span className="dateLabel">Auction Date:</span>
          <span className="dateValue">{auctionDate}</span>
        </div>

        <Link to={`/property/${id}`}>
        <button
          className="viewButton"
          aria-label={`View details for ${title}`}
        >
          View Details
        </button>
        </Link>
      </div>
    </article>
  );
};

PropertyCards.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  bankName: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  auctionDate: PropTypes.any.isRequired,
  imageUrl: PropTypes.any.isRequired,
};
