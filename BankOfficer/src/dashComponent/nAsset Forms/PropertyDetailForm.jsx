import { useContext } from "react";
import "./propertyDetailForm.scss";
import PropTypes from "prop-types";
import { AppContext } from "../../context/context";

const PropertyDetailsForm = ({ nextStep }) => {
  const { formData, setFormData } = useContext(AppContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <main className="propertyFormContainer">
      <div className="formContent">
        {/* Property Title */}
        <section className="formGroup">
          <label>Property Title:</label>
          <div className="inputWrapper">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Type the property name..."
              aria-label="Property Title"
            />
          </div>
        </section>

        {/* Category */}
        <section className="formGroup">
          <label>Category:</label>
          <div className="inputWrapper">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              aria-label="Category"
              placeholder="Select the category"
            >
              <option value="">Select the category</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
              <option value="Agricultural">Agricultural</option>
            </select>
          </div>
        </section>

        {/* Auction Date */}
        <section className="formGroup">
          <label>Auction Date:</label>
          <div className="inputWrapper">
            <input
              type="text"
              name="auctionDate"
              value={formData.auctionDate}
              onChange={handleChange}
              placeholder="DD/MM/YYYY"
              aria-label="Auction Date"
            />
            <img src="/calendar.svg" className="inputIcon" alt="Calendar" />
          </div>
        </section>

        {/* Auction Time */}
        <section className="formGroup">
          <label>Auction Time:</label>
          <div className="inputWrapper">
            <input
              type="text"
              name="auctionTime"
              value={formData.auctionTime}
              onChange={handleChange}
              placeholder="e.g 10:00AM To 12:00AM"
              aria-label="Auction Time"
            />
          </div>
        </section>

        {/* Price */}
        <section className="formGroup">
          <label>Price:</label>
          <div className="inputWrapper">
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter Price here"
              aria-label="Price"
            />
          </div>
        </section>

        {/* Description */}
        <section className="formGroup">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Description here..."
            aria-label="Description"
          ></textarea>
        </section>
      </div>

      {/* Action Buttons */}
      <footer className="actions">
        <button className="cancelButton">
          <img src="/delete2.svg" className="buttonIcon" alt="Cancel" />
          Cancel
        </button>
        <button className="nextButton" onClick={nextStep}>
          <img src="/check2.svg" className="buttonIcon" alt="Next" />
          Next
        </button>
      </footer>
    </main>
  );
};

PropertyDetailsForm.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default PropertyDetailsForm;