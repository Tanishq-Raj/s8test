import { useContext } from "react";
import "./auctionForm.scss";
import PropTypes from "prop-types";
import { AppContext } from "../../context/context";
import axios from "axios";

const AuctionDetailsForm = ({ prevStep, handleSubmit }) => {
  const { formData, setFormData, uploadedFiles, setUploadedFiles, serverUrl } = useContext(AppContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const newFormData = new FormData();
      newFormData.append("title", formData.title);
      newFormData.append("category", formData.category);
      // newFormData.append("auctionType", formData.auctionType);
      newFormData.append("auctionDate", formData.auctionDate);
      newFormData.append("auctionTime", formData.auctionTime);
      // newFormData.append("area", formData.area);
      newFormData.append("price", formData.price);
      newFormData.append("description", formData.description);
      newFormData.append("contact", formData.contact);
      newFormData.append("nearbyPlaces", formData.nearbyPlaces);
      // newFormData.append("latitude", formData.latitude);
      // newFormData.append("longitude", formData.longitude);
      newFormData.append("address", JSON.stringify(formData.address));
      newFormData.append("auctionUrl", formData.auctionUrl);
      newFormData.append("borrower", formData.borrower);
      newFormData.append("amountDue", formData.amountDue);
      newFormData.append("deposit", formData.deposit);
      newFormData.append("bidInc", formData.bidInc);
      newFormData.append("inspectDate", formData.inspectDate);
      newFormData.append("inspectTime", formData.inspectTime);
      // newFormData.append("message", formData.message);
      uploadedFiles && newFormData.append("files", uploadedFiles);

      console.log(newFormData);
      // const {data} = await axios.post( serverUrl + "/api/v1/bank-user/add-property", newFormData, {withCredentials: true});

    } catch (error) {
      
    }
  };

  return (
    <main className="auctionFormContainer">
      <div className="formContent">
        {/* Borrower/Mortgagor/Guarantors */}
        <section className="formGroup">
          <label>Borrower/Mortgagor/Guarantors:</label>
          <div className="inputWrapper">
            <input
              type="text"
              name="borrower"
              value={formData.borrower}
              onChange={handleChange}
              placeholder="Enter the name"
              aria-label="Borrower/Mortgagor/Guarantors"
            />
          </div>
        </section>

        {/* Amount Due */}
        <section className="formGroup">
          <label>Amount Due:</label>
          <div className="inputWrapper">
            <input
              type="text"
              name="amountDue"
              value={formData.amountDue}
              onChange={handleChange}
              placeholder="Enter the due amount"
              aria-label="Amount Due"
            />
          </div>
        </section>

        {/* Earnest Money Deposit */}
        <section className="formGroup">
          <label>Earnest Money Deposit:</label>
          <div className="inputWrapper">
            <input
              type="text"
              name="deposit"
              value={formData.deposit}
              onChange={handleChange}
              placeholder="Enter Earnest Money Deposit"
              aria-label="Earnest Money Deposit"
            />
          </div>
        </section>

        {/* Bid Amount */}
        <section className="formGroup">
          <label>Bid Amount:</label>
          <div className="inputWrapper">
            <input
              type="text"
              name="bidInc"
              value={formData.bidInc}
              onChange={handleChange}
              placeholder="Enter the bidding amount"
              aria-label="Bid Amount"
            />
          </div>
        </section>

        {/* Property Inspection Date */}
        <section className="formGroup">
          <label>Property Inspection Date:</label>
          <div className="inputWrapper">
            <input
              type="text"
              name="inspectDate"
              value={formData.inspectDate}
              onChange={handleChange}
              placeholder="DD/MM/YYYY"
              aria-label="Property Inspection Date"
            />
            <img src="/calendar.svg" className="inputIcon" alt="Calendar Icon" />
          </div>
        </section>

        {/* Property Inspection Time */}
        <section className="formGroup">
          <label>Property Inspection Time:</label>
          <div className="inputWrapper">
            <input
              type="text"
              name="inspectTime"
              value={formData.inspectTime}
              onChange={handleChange}
              placeholder="Enter time"
              aria-label="Property Inspection Time"
            />
            <img src="/clock.svg" className="inputIcon" alt="Clock Icon" />
          </div>
        </section>

        {/* Auction URL */}
        <section className="formGroup">
          <label>Auction URL:</label>
          <div className="inputWrapper">
            <input
              type="text"
              name="auctionUrl"
              value={formData.auctionUrl}
              onChange={handleChange}
              placeholder="Enter the auction URL"
              aria-label="Auction URL"
            />
          </div>
        </section>

        {/* Enquiry Contact */}
        <section className="formGroup">
          <label>Enquiry Contact:</label>
          <div className="inputWrapper">
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter the enquiry contact number"
              aria-label="Enquiry Contact"
            />
          </div>
        </section>
      </div>

      {/* Action Buttons */}
      <footer className="actions">
        <button className="cancelButton" onClick={prevStep}>
          <img src="/back.svg" className="buttonIcon" alt="Back" />
          Back
        </button>
        <button className="nextButton" onClick={handleSubmit}>
          <img src="/check2.svg" className="buttonIcon" alt="Submit" />
          Submit
        </button>
      </footer>
    </main>
  );
};

AuctionDetailsForm.propTypes = {
  prevStep: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AuctionDetailsForm;