import "./profile.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../../../context/context";

const Profile = () => {
  // Default avatar image state
  const [image, setImage] = useState("/user.png");

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.get(serverUrl + "/api/v1/user/get-profile");
        console.log(response.data);
        if (response.data.success) {
          const profileData = response.data.data;
          setUserDetails({
            name: profileData.name || "",
            email: profileData.email || "",
            mobile: profileData.mobile || "",
            flatNo: profileData.flatNo || "",
            city: profileData.city || "",
            state: profileData.state || "",
            pincode: profileData.pincode || ""
          });
          // Optionally update the avatar if the profile has one
          if (profileData.image) {
            setImage(profileData.image);
          }
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    getProfile();
  }, []);

  // Handle avatar image change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  // Popup state for save confirmation
  const [showPopup, setShowPopup] = useState(false);
  const {serverUrl} = useContext(AppContext)

  // User details state (removed lastName and renamed firstName to name)
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    flatNo: "",
    city: "",
    state: "",
    pincode: ""
  });

  // Handle input changes for any field in userDetails
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle Save Button Click and send request to the backend using axios
  const handleSave = async () => {
    try {
      // Send a POST request to the backend
      console.log(userDetails)
      const response = await axios.post(serverUrl + "/api/v1/user/update-profile", userDetails);
      console.log(response.data);
      setShowPopup(true);
      
      // Hide the popup after 2 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="profile">
      {/* <div className="sideContainer2">
        <Sidebar />
      </div> */}
      <div className="mainContent">
        <Header />
        <div className="mainWrapper">
          <div className="profile-container">
            {/* Avatar Section */}
            <div className="avatar-section">
              <img src={image} alt="User Avatar" className="avatar" />
              <h3>@{userDetails.name || "User"}</h3>
              <p>{userDetails.email || "user@email.com"}</p>
              <input
                type="file"
                id="avatarUpload"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <button
                onClick={() => document.getElementById("avatarUpload").click()}
                className="upload-btn"
              >
                Upload new avatar
              </button>
            </div>

            {/* Information Section (Auto Updates) */}
            <div className="details-section">
              <div className="info">
                <h4>Information</h4>
                <p>
                  <strong>Name:</strong> {userDetails.name || "Name"}
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  {userDetails.email || "user@email.com"}
                </p>
                <p>
                  <strong>Tel:</strong>{" "}
                  {userDetails.mobile ? `+91 ${userDetails.mobile}` : "+91 966 696 123"}
                </p>
                <p>
                  <strong>Address:</strong>{" "}
                  {userDetails.flatNo || ""} {userDetails.city || ""}{" "}
                  {userDetails.state || ""} {userDetails.pincode || ""}
                </p>
              </div>
            </div>
          </div>

          {/* User Settings Form */}
          <div className="form-container">
            <h3 className="form-title">User Settings</h3>

            {/* Personal Details */}
            <div className="form-section">
              <h4>Personal Details</h4>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={userDetails.name}
                    placeholder="Enter your full name..."
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={userDetails.email}
                    placeholder="Enter your email..."
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Mobile Number</label>
                  <div className="mobile-input">
                    <span className="country-code">+91</span>
                    <input
                      type="text"
                      name="mobile"
                      value={userDetails.mobile}
                      placeholder="Enter your number..."
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr className="custom-hr" />

            {/* Address Details */}
            <div className="form-section">
              <h4>Address</h4>
              <div className="form-row">
                <div className="form-group">
                  <label>Flat No:</label>
                  <input
                    type="text"
                    name="flatNo"
                    value={userDetails.flatNo}
                    placeholder="Enter your Flat number..."
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={userDetails.city}
                    placeholder="Enter city..."
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    value={userDetails.state}
                    placeholder="Enter state..."
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Pincode</label>
                  <input
                    type="number"
                    name="pincode"
                    value={userDetails.pincode}
                    placeholder="Enter pincode..."
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <hr className="custom-hr" />

            {/* Password Settings */}
            <div className="form-section">
              <h4>Password Settings</h4>
              <div className="form-row">
                <div className="form-group">
                  <label>Old Password</label>
                  <input
                    type="password"
                    placeholder="Enter your old password..."
                  />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    placeholder="Enter your new password..."
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-pass">
                  <label>Confirm New Password</label>
                  <input
                    type="password"
                    placeholder="Re-enter your new password..."
                  />
                </div>
              </div>
            </div>

            <button className="save-btn" onClick={handleSave}>
              Save changes
            </button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popupMessage">
          <p>Profile saved successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Profile;