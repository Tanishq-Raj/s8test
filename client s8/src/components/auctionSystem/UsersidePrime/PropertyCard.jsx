import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/context";
import axios from "axios";

function PropertyCard() {
  const navigate = useNavigate();
  const { serverUrl, properties, setProperties } = useContext(AppContext);
  const [showAllProperties, setShowAllProperties] = useState(false);

  const handleSeeDetails = (propertyId) => {
    window.scrollTo(0, 0);
    navigate("/property");
  };

  const handleViewAll = () => {
    setShowAllProperties(true);
  };

  // Determine which properties to display
  const displayProperties = showAllProperties ? properties : properties.slice(0, 4);

  return (
    <div>
      {/* Property Cards */}
      <div className="flex flex-wrap gap-5 justify-center">
        {displayProperties.map((property) => (
          <div 
            key={property._id} 
            className="flex flex-col bg-white rounded-lg shadow-lg w-[300px] min-h-[420px] transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-xl hover:scale-105"
            >
            <div className="p-4">
              <img
                loading="lazy"
                src={property.image[0]?.url || 'placeholder-image-url'}
                alt={property.title}
                className="object-cover w-full h-[200px] rounded-xl"
                />
            </div>
            
            <div className="flex flex-col p-6 w-full rounded-b-xl h-full relative">
              <div>
                <div className="text-xl font-semibold text-slate-500 text-left">{property.title}</div>
                
                <div className="text-sm text-slate-400 mt-2 text-left">{property.location}</div>
      
                <div className="flex items-center mt-4">
                  <div className="text-slate-500 text-sm mr-2">Bid Price:</div>
                  <div className="font-medium text-zinc-900">{property.price}</div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6">
                <button 
                  onClick={() => handleSeeDetails(property._id)}
                  className="flex justify-center items-center px-4 py-2 bg-sky-900 text-white rounded-lg hover:bg-sky-800 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  >
                  <div className="text-sm font-medium">See Details</div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showAllProperties && properties.length > 4 && (
        <div className="flex justify-end mt-8 mr-8">
          <button 
            onClick={handleViewAll}
            className="flex gap-2 justify-center items-center px-6 py-3 text-xl font-medium rounded-2xl bg-sky-900 bg-opacity-5 hover:bg-opacity-10 transition-all duration-300"
          >
            <div className="text-slate-600">View all...</div>
            <div className="flex gap-1 justify-center items-center self-stretch px-1 my-auto w-8 h-8 rounded-lg bg-sky-900 bg-opacity-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export default PropertyCard;
