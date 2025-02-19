import React, { useState } from 'react';
import SearchHeader from './SearchHeader';
import CategoryCard from './CategoryCard';
import PropertyCard from './PropertyCard';
import { PropertyGrid } from './PropertyGrid';
// import PropertyAuctions from '../components/PropertyAuctions';
import PropertyDiscription from './PropertyCard copy';
import { PropertyCardList } from './PropertyCard1';

const categories = [
  { title: 'INDUSTRIAL', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/79f55df53452d15f44fba67b67e84656bc7f77caac885b0d9f1ae0efca81e3ec?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf' },
  { title: 'LAND', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/59ea53c8e6b9178a814ecb3192432b96b90e4404b660a72c651413b2cee1c10f?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf' },
  { title: 'COMMERCIAL', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b110cbe65b0ee4b3ff4a0c079afb56314a0a104403b875370e9eb8afcab9c20a?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf' },
  { title: 'RESIDENTIAL', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6b1629408ec0a67067984f7a3671ffd768fc989a8b2e5578c32567c3ad8f2235?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf' }
];

const allProperties = [
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/32e195df577c08c77be34af1fdad21c5d86d1ae6192e287e3269e7c017d176c8?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf',
      title: 'Thakur Complex',
      location: 'Aviasales.ru Seaview Phuket office, Phuket, Thailand',
      bidPrice: '65,03,099',
      bank: 'State Bank of India'
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/32e195df577c08c77be34af1fdad21c5d86d1ae6192e287e3269e7c017d176c8?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf',
      title: 'Thakur Complex',
      location: 'Aviasales.ru Seaview Phuket office, Phuket, Thailand',
      bidPrice: '65,03,099',
      bank: 'State Bank of India'
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/32e195df577c08c77be34af1fdad21c5d86d1ae6192e287e3269e7c017d176c8?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf',
      title: 'Thakur Complex',
      location: 'Aviasales.ru Seaview Phuket office, Phuket, Thailand',
      bidPrice: '65,03,099',
      bank: 'State Bank of India'
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/32e195df577c08c77be34af1fdad21c5d86d1ae6192e287e3269e7c017d176c8?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf',
      title: 'Diamond Plaza',
      location: '123 Business District, Mumbai',
      bidPrice: '85,00,000',
      bank: 'HDFC Bank'
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/32e195df577c08c77be34af1fdad21c5d86d1ae6192e287e3269e7c017d176c8?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf',
      title: 'Sunshine Towers',
      location: '456 Marine Drive, Mumbai',
      bidPrice: '95,50,000',
      bank: 'ICICI Bank'
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/32e195df577c08c77be34af1fdad21c5d86d1ae6192e287e3269e7c017d176c8?placeholderIfAbsent=true&apiKey=643dc8ae27ef4b1eb644562c7626beaf',
      title: 'Green Valley Estate',
      location: '789 Hill Road, Pune',
      bidPrice: '72,25,000',
      bank: 'Axis Bank'
    }
  ];
  

function AuctionLayout() {
  const [showAll, setShowAll] = useState(false);
  const [disCategories, setDisCategories] = useState(false);
  const [disProperties, setDisProperties] = useState(true);
  const displayedProperties = showAll ? allProperties : allProperties.slice(0, 3);

  const handlePro = () => {
    setDisProperties(false);
    setDisCategories(true);
  }


  const handleViewAll = () => {
    setShowAll(true);
    // Smooth scroll to the properties section
    const propertiesSection = document.getElementById('properties-section');
    propertiesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex overflow-hidden flex-col pt-7 pb-14 bg-white">
      <SearchHeader />
      <div onClick={handlePro} className=" flex flex-wrap gap-10 items-center self-center mt-11 max-md:mt-10 max-md:max-w-full">
        {categories.map((category, index) => (
            <div key={index} className="cursor-pointer"><CategoryCard  {...category} /></div>
          
        ))}
      </div>
      <div id="properties-section" className="flex flex-col items-center self-center mt-20 w-full max-w-[1381px] max-md:mt-10 max-md:max-w-full">
        {disCategories && (
          <>
            <div className="flex flex-wrap gap-4 justify-center items-center w-full">
              {/* {displayedProperties.map((property, index) => (
                <PropertyCard key={index} {...property} />
              ))} */}
              <PropertyCard/>
            </div>
            {!showAll && (
              <div className="w-full flex justify-end px-17 max-md:px-4">
                <button 
                  onClick={handleViewAll}
                  className="flex gap-2 justify-center items-center px-6 py-3 mt-8 text-xl font-medium rounded-2xl bg-sky-900 bg-opacity-5 hover:bg-opacity-10 transition-all duration-300"
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
          </>
        )}
        {disProperties && <PropertyGrid/>}
      </div>
      
        
    </div>
  );
}

export default AuctionLayout;
