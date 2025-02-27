import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyCard from '../components/auctionSystem/UsersidePrime/PropertyCard';
import { toast } from 'react-toastify';

const Assets = () => {
  const navigate = useNavigate();

  const properties = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4446c63f83f17ac0c7b5caed30723e47167bad11295d617f54588d280e0e0fb8?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031",
      name: "Azure Palace",
      location: "123 Main Street, Cityname",
      date: "January 20, 2025",
      price: "250,000"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4446c63f83f17ac0c7b5caed30723e47167bad11295d617f54588d280e0e0fb8?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031",
      name: "Emerald Heights",
      location: "456 Park Avenue, Townsville",
      date: "January 25, 2025",
      price: "320,000"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4446c63f83f17ac0c7b5caed30723e47167bad11295d617f54588d280e0e0fb8?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031",
      name: "Ruby Residences",
      location: "789 Lake Road, Riverside",
      date: "February 1, 2025",
      price: "280,000"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4446c63f83f17ac0c7b5caed30723e47167bad11295d617f54588d280e0e0fb8?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031",
      name: "Sapphire Towers",
      location: "321 Ocean View, Beachside",
      date: "February 5, 2025",
      price: "420,000"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4446c63f83f17ac0c7b5caed30723e47167bad11295d617f54588d280e0e0fb8?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031",
      name: "Diamond Plaza",
      location: "567 Mountain Road, Highland",
      date: "February 10, 2025",
      price: "350,000"
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex overflow-hidden flex-col py-12 w-full bg-slate-50 max-md:max-w-full">
        <div className="self-center text-5xl font-medium leading-none text-sky-900 max-md:max-w-full max-md:text-4xl">
          Explore our latest property Auctions :
        </div>
        <div className="flex flex-col pl-20 pr-20 mt-7 w-full max-md:pl-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full text-sky-900 max-w-[1346px] max-md:max-w-full">
            <div className="text-3xl leading-none font-[250]">Latest Assets</div>
            {/* <button 
              onClick={() => {
                const isLoggedIn = localStorage.getItem('user') || sessionStorage.getItem('user');
                if (!isLoggedIn) {
                  toast.error('Please sign in to view all results');
                  window.scrollTo(0, 0);
                  navigate('/sign-up');
                  return;
                }
                // Handle the "See all result" action for logged in users
                // Add your logic here
              }}
              className="flex gap-2 justify-center items-center px-6 py-2 rounded-2xl bg-sky-900 bg-opacity-10 hover:bg-opacity-20 transition-all duration-300">
              <div className="self-stretch my-auto text-lg leading-none text-center rounded-lg text-zinc-900">
                See all result
              </div>
              <div className="flex gap-1 justify-center items-center self-stretch px-1 my-auto w-8 h-8 rounded-lg bg-zinc-900 bg-opacity-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d6704744fb3259d66d38d3ecc5a305d56a73c2e8a355ce17304faa8ca159a55?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031"
                  alt="View all arrow"
                  className="object-contain self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </button> */}
          </div>
          <div className="flex flex-wrap gap-5 justify-center mt-8">
            {/* {properties.map((property, index) => (
              <PropertyCard key={index} />
            ))} */}
            <PropertyCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
