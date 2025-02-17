//not in use

import FilterSearch from "./FilterSearch";
import "./filterOption.scss";

const FilterOption = () => {
    const handleSelect = (selectedOption, label) => {
        console.log(`${label} selected: ${selectedOption}`);
      };
      return (
        <div className="filterWrapper">

            {/* Date Filter */}
          <FilterSearch
            icon="timer.svg" // Replace with an actual icon URL
            label="Auction Date"
            options={["Today", "This Week", "This Month", "Custom Range"]}
            onSelect={(selectedOption) => handleSelect(selectedOption, "Date")}
          />
    
          {/* Asset Type Filter */}
          <FilterSearch
            icon="building.svg" // Replace with an actual icon URL
            label="Asset Type"
            options={["Option A", "Option B", "Option C", "Option D", "Option E"]}
            onSelect={(selectedOption) => handleSelect(selectedOption, "Asset Type")}
          />
    
          
          {/* Auctioneer Filter */}
          <FilterSearch
            icon="bank.svg" // Replace with an actual icon URL
            label="Auctioneer"
            options={["Auctioneer A", "Auctioneer B", "Auctioneer C"]}
            onSelect={(selectedOption) => handleSelect(selectedOption, "Auctioneer")}
          />
    
          {/* Location Filter */}
          <FilterSearch
            icon="location.svg" // Replace with an actual icon URL
            label="Location"
            options={["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]}
            onSelect={(selectedOption) => handleSelect(selectedOption, "Location")}
          />
    
          {/* Price Filter */}
          <FilterSearch
            icon="price-tag.svg" // Replace with an actual icon URL
            label="Price Range"
            options={["<₹10,000", "₹10,000-$50,000", "₹50,000-$1,00,000", ">₹1,00,000"]}
            onSelect={(selectedOption) => handleSelect(selectedOption, "Price")}
          />
        </div>
      );
    };

export default FilterOption
