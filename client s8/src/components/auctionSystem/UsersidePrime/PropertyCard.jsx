import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/context";
import axios from "axios";

function PropertyCard({ image, title, location, bidPrice, bank }) {
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
    <>
      <div className="flex flex-wrap gap-5 justify-start">
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
    </>
  );
}

export default PropertyCard;
