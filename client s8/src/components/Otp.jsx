import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/context';

const OtpPopup = ({ onSuccess, onClose }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);
  const { serverUrl } = useContext(AppContext);

  // Handles submission of OTP and posts it to the backend
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      // POST the OTP to the backend endpoint
      const response = await axios.post(`${serverUrl}/api/v1/user/otp-verification`, { otp });
      console.log("OTP verified successfully:", response.data);
      onSuccess(); // Call onSuccess callback if OTP verification succeeds
    } catch (err) {
      console.error("OTP verification error:", err);
      setError('OTP verification failed. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      {/* Modal Content */}
      <div className="bg-white p-6 rounded-lg z-10 w-96">
        <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
        <form onSubmit={handleOtpSubmit}>
          <input 
            type="text" 
            value={otp} 
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="border border-gray-300 p-2 rounded w-full mb-4"
          />
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <button 
            type="submit" 
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Verify OTP
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-sm text-blue-500 hover:underline">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OtpPopup;
