
import "./addressForm.scss";
import PropTypes from "prop-types";

const AddressDetailsForm = ({ nextStep, prevStep }) => {  return (
    <main className="addressFormContainer">
      <div className="formContent">

        {/* City */}
        <section className="formGroup">
          <label>City:</label>
          <div className="inputWrapper">
          <input type="text" placeholder="Enter Country" />
          </div>
            {/* <img src="/icons/dropdown.svg" className="inputIcon" alt="Dropdown" /> */}
        </section>

        {/* State */}
        <section className="formGroup">
          <label>State:</label>
          <div className="inputWrapper">
          <input type="text" placeholder="Enter Country" />
          </div>
            {/* <img src="/icons/dropdown.svg" className="inputIcon" alt="Dropdown" /> */}
        </section>

        {/* Country */}
        <section className="formGroup">
          <label>Country:</label>
          <div className="inputWrapper">
          <input type="text" placeholder="Enter Country" />
          </div>
            {/* <img src="/icons/dropdown.svg" className="inputIcon" alt="Dropdown" /> */}
        </section>

        {/* Asset Address */}
        <section className="formGroup">
          <label>Asset Address:</label>
          <div className="inputWrapper">
          <textarea  type="text" placeholder="Enter Asset Address" />
          </div>
        </section>

        {/* Nearby Place */}
        <section className="formGroup">
          <label>Nearby Place:</label>
          <div className="inputWrapper">
          <input type="text" placeholder="Enter Nearby Place" />
          </div>
        </section>
      </div>

     {/* Action Buttons */}
     <footer className="actions">
        <button className="cancelButton" onClick={prevStep}>
          <img src="/back.svg" className="buttonIcon" alt="Back" />
          Back
        </button>
        <button className="nextButton" onClick={nextStep}>
          <img src="/check2.svg" className="buttonIcon" alt="Next" />
          Next
        </button>
      </footer>
    </main>
  );
};

AddressDetailsForm.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};


export default AddressDetailsForm;
