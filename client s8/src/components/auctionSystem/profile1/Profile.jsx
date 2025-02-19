import "./profile.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Profile = () => {
    const [image, setImage] = useState("/user.png"); // Default avatar
    
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setImage(imageUrl);
        }
      };
  
    // For Pop-up Message
      const [showPopup, setShowPopup] = useState(false); // State for popup

 // Handle Save Button Click
 const handleSave = () => {
    setShowPopup(true); // Show the popup

    // Hide the popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

 // State for user details
 const [userDetails, setUserDetails] = useState({
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  bankName: "",
  branchAddress: "",
  branchName: "",
  ifsc: "",
  jobTitle: ""
});

// Handle input changes
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
  }));
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
        <h3>@{userDetails.firstName || "User"}</h3>
        <p>{userDetails.email || "user@email.com"}</p>
        <input
          type="file"
          id="avatarUpload"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <button onClick={() => document.getElementById("avatarUpload").click()} className="upload-btn">
          Upload new avatar
        </button>
      </div>

       {/* Information Section (Auto Updates) */}
      <div className="details-section">
        <div className="info">
          <h4>Information</h4>
          <p><strong>Name:</strong> {userDetails.firstName || "First Name"} {userDetails.lastName || "Last Name"}</p>
          <p><strong>Email:</strong> {userDetails.email || "user@email.com"}</p>
          <p><strong>Tel:</strong> {userDetails.mobile ? `+91 ${userDetails.mobile}` : "+91 966 696 123"}</p>
          <p><strong>Address:</strong> {userDetails.address || "e.g:18/A, Mumbai Branch"}</p>
        </div>
        {/* <div className="info2">
          <h4>Professional Details</h4>
          <p><strong>Bank name:</strong> {userDetails.bankName || "e.g:State Bank of India"}</p>
          <p><strong>Job Title:</strong> {userDetails.jobTitle || "e.g:Manager"}</p>
          <p><strong>IFSC:</strong> {userDetails.ifsc || "e.g:SBIN1000511"}</p>
          <p><strong>Branch Name:</strong> {userDetails.branchName || "e.g: Mumbai"}</p>
          <p><strong>Branch Address:</strong> {userDetails.branchAddress || "e.g:18/A, Mumbai Branch"}</p>
        </div> */}
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
                                    <input type="text" name="firstName" value={userDetails.firstName} placeholder="Enter your first name..." onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" name="lastName" value={userDetails.lastName} placeholder="Enter your last name..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" value={userDetails.email} placeholder="Enter your email..." onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Mobile Number</label>
                                    <div className="mobile-input">
                                        <span className="country-code">+91</span>
                                        <input type="text" name="mobile" value={userDetails.mobile} placeholder="Enter your number..." onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* horrizontal line */}
                        <hr className="custom-hr" /> 

             {/* Professional Details Form */}
                       <div className="form-section">
                            <h4>Address</h4>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Flat No:</label>
                                    <input type="text" name="flatNo" value={userDetails.flatNo} placeholder="Enter your Flat number..." onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>City</label>
                                    <input type="text" name="city" value={userDetails.city} placeholder="Enter city..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Building Name</label>
                                    <input type="text" name="buildingName" value={userDetails.buildingName} placeholder="Enter building name..." onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>State</label>
                                    <input type="text" name="state" value={userDetails.state} placeholder="Enter state..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="form-address">
                            <div className="form-group">
                                    <label>Street</label>
                                    <textarea type="text" name="street" value={userDetails.street} placeholder="Enter street name..." onChange={handleInputChange}  rows="2"/> 
                                </div>

                                <div className="form-group">
                                    <label>Pincode</label>
                                    <input type="number" name="pincode" value={userDetails.pincode} placeholder="Enter pincode..." onChange={handleInputChange}  rows="2"/> 
                                </div>                
                                </div>
                        </div>

                  {/* horrizontal line */}
                  <hr className="custom-hr" /> 

            {/* Password Settings */}
            <div className="form-section">
              <h4>Password Settings</h4>
              <div className="form-row">
                <div className="form-group">
                  <label>Old Password</label>
                  <input type="password" placeholder="Enter your old password..." />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input type="password" placeholder="Enter your new password..." />
                </div>
              </div>
              <div className="form-row">
                <div className="form-pass">
                  <label>Confirm New Password</label>
                  <input type="password" placeholder="Re-enter your new password..." />
                </div>
              </div>
            </div>

            <button className="save-btn" onClick={handleSave}>Save changes</button>

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