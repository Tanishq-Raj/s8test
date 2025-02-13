
import "./addressForm.scss";
import PropTypes from "prop-types";

const AddressDetailsForm = ({ nextStep, prevStep }) => {  return (
    <main className="addressFormContainer">
      <div className="formContent">

         {/* Asset Address */}
        <section className="formGroup">
          <label>Asset Address:</label>
          <div className="inputWrapper">
          <textarea  type="text" placeholder="Enter Asset Address" />
          </div>
        </section>

         {/* Pincode  */}
        <section className="formGroup">
          <label>Pincode :</label>
          <div className="inputWrapper">
          <input type="text" placeholder="Enter Pincode " />
          </div>
            {/* <img src="/icons/dropdown.svg" className="inputIcon" alt="Dropdown" /> */}
        </section>

         {/* City */}
        <section className="formGroup">
          <label>City:</label>
          <div className="inputWrapper">
          <input type="text" placeholder="Enter City" />
          </div>
            {/* <img src="/icons/dropdown.svg" className="inputIcon" alt="Dropdown" /> */}
        </section>

        {/* State */}
        <section className="formGroup">
          <label>State:</label>
          <div className="inputWrapper">
          <input type="text" placeholder="Enter State" />
          </div>
            {/* <img src="/icons/dropdown.svg" className="inputIcon" alt="Dropdown" /> */}
        </section>
      
        {/* Asset Longitude , Latitude */}
        <div className="form-row">
        <section className="formGroup">
           <label>Longitude:</label>
           <div className="inputWrapper">
            <input type="text" placeholder="Enter Asset longitude" />
           </div>
        </section>
        <section className="formGroup">
           <label>Latitude:</label>
           <div className="inputWrapper">
            <input type="text" placeholder="Enter Asset longitude" />
           </div>
        </section>
        </div>

        {/* Nearby Place */}
        <section className="formGroup">
          <label>Nearby Place:</label>
          <div className="inputWrapper">
          <textarea  type="text" placeholder="Enter Nearby Place" />
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
