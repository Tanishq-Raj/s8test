
import "./auctionForm.scss";
import PropTypes from "prop-types";

const AuctionDetailsForm = ({ prevStep, handleSubmit }) => {  
  return (
    <main className="auctionFormContainer">
      <div className="formContent">
        {/* Borrower/Mortgagor/Guarantors */}
        <section className="formGroup">
          <label>Borrower/Mortgagor/Guarantors:</label>
          <div className="inputWrapper">
          <input type="text" placeholder="Enter the name" />
          </div>
        </section>

        {/* Amount Due */}
        <section className="formGroup">
          <label>Amount Due:</label>
          <div className="inputWrapper">
            <input type="text" placeholder="Enter the due amount" />
            {/* <img src="/icons/money.svg" className="inputIcon" alt="Money Icon" /> */}
          </div>
        </section>

        {/* Earnest Money Deposit */}
        <section className="formGroup">
          <label>Earnest Money Deposit:</label>
          <div className="inputWrapper">
            <input type="text" placeholder="Enter Earnest Money Deposit" />
            {/* <img src="/icons/money.svg" className="inputIcon" alt="Money Icon" /> */}
          </div>
        </section>

        {/* Bid Amount */}
        <section className="formGroup">
          <label>Bid Amount:</label>
          <div className="inputWrapper">
            <input type="text" placeholder="Enter the bidding amount" />
            {/* <img src="/icons/money.svg" className="inputIcon" alt="Money Icon" /> */}
          </div>
        </section>

        {/* Property Inspection Date */}
        <section className="formGroup">
          <label>Property Inspection Date:</label>
          <div className="inputWrapper">
            <input type="text" placeholder="DD/MM/YYYY" />
            <img src="/calendar.svg" className="inputIcon" alt="Calendar Icon" />
          </div>
        </section>

        {/* Property Inspection Time */}
        <section className="formGroup">
          <label>Property Inspection Time:</label>
          <div className="inputWrapper">
            <input type="text" placeholder="Enter time" />
            <img src="/clock.svg" className="inputIcon" alt="Clock Icon" />
          </div>
        </section>

        {/* Auction URL */}
        <section className="formGroup">
          <label>Auction URL:</label>
          <div className="inputWrapper">
          <input type="text" placeholder="Enter the auction URL" />
        </div>
        </section>

        {/* Enquiry Contact */}
        <section className="formGroup">
        <label>Enquiry Contact:</label>
         <div className="inputWrapper">
          <input type="text" placeholder="Enter the enquiry contact number" />
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
