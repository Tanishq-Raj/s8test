import React, { useState } from "react";
import PropertyDiscription from "./PropertyCard copy";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../context/context";
import { useEffect } from "react";
import axios from "axios"

function PropertyCard({ image, title, location, bidPrice, bank }) {
  const navigate = useNavigate();
  const { serverUrl } = useContext(AppContext);
  const [properties, setProperties] = useState([])
  useEffect(() => {
    // Fetch properties from your backend API when the component mounts
    const fetchProperties = async () => {
      try {
        console.log("Here");
        const { data } = await axios.get(
          serverUrl + "/api/v1/user/get-properties", 
          {withCredentials: true}
        ); // Replace with your API endpoint
        setProperties(data.properties);
        console.log(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  // const handleSeeDetails = () => {
  //   window.scrollTo(0, 0);
  //   navigate("/property");
  // };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {properties.map((property) => (
        <div 
          key={property._id} // Assuming your properties have unique IDs
          onClick={() => handleSeeDetails(property._id)} // Pass property ID to handleSeeDetails
          className="flex overflow-hidden flex-col grow shrink self-stretch my-auto bg-white rounded-2xl min-h-[633px] min-w-[240px] shadow-[0px_4px_40px_rgba(0,0,0,0.08)] w-[358px] max-md:max-w-full
          transition-all duration-300 ease-in-out cursor-pointer
          hover:translate-y-[-8px] hover:bg-gray-50 hover:shadow-[0px_8px_40px_rgba(0,0,0,0.12)]"
        >
          <img
            loading="lazy"
            src={property.image[0]?.url || 'placeholder-image-url'} // Access image URL from property object
            alt={property.title}
            className="object-contain flex-1 w-full aspect-[1.24] max-md:max-w-full"
          />
          <div className="flex flex-col p-4 w-full max-md:max-w-full">
            <div className="flex flex-col p-2 w-full">
              <div className="text-2xl font-semibold text-slate-500">{property.title}</div>
              <div className="flex-1 shrink gap-2.5 self-stretch p-0.5 mt-1 w-full text-base text-slate-400">
                {/* {property.location} */} {/* Assuming you have location in your property data */}
              </div>
            </div>
            <div className="flex gap-2.5 items-start mt-8 w-full text-base text-center">
              <div className="flex-1 shrink leading-6 text-black basis-0">
                <span className="text-slate-500">Bid Price</span>
                <br />
                <span className="font-medium text-zinc-900">{property.price}</span> {/* Assuming 'price' is the bid price */}
              </div>
              <div className="flex-1 shrink leading-none basis-0 text-slate-500">
                {property.bankName}
              </div>
            </div>
            <div className="flex flex-col justify-center px-12 py-0.5 mt-8 w-full text-xl font-medium text-center text-zinc-50 max-md:px-5">           
              <button 
            onClick={navigate(`#`)}
            className="flex-1 shrink gap-2.5 self-stretch p-2 w-full bg-sky-900 rounded hover:bg-sky-800 transition-colors duration-300"
          >
            See Details
          </button>
        </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertyCard;