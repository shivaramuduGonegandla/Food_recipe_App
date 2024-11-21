import React, { useState } from 'react';

const FilterSortSection = () => {
  // State for sorting and filters
  const [sortBy, setSortBy] = useState('Relevance (Default)');
  const [costRange, setCostRange] = useState('Rs. 300-Rs. 600');
  const [vegNonVeg, setVegNonVeg] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleCostRangeChange = (event) => {
    setCostRange(event.target.value);
  };

  const handleVegNonVegChange = (event) => {
    setVegNonVeg(event.target.value);
  };

  const handleDeliveryTimeChange = (event) => {
    setDeliveryTime(event.target.value);
  };

  return (
    <div style={{ marginTop: '10px', padding: '20px 0', backgroundColor: '#f8f8f8' }}>
      {/* Filter Section */}
      <div className="filter-section" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <button
            onClick={() => setCostRange('Rs. 300-Rs. 600')}
            style={filterButtonStyle}
          >
            Rs. 300-Rs. 600
          </button>
          <button
            onClick={() => setCostRange('Less than Rs. 300')}
            style={filterButtonStyle}
          >
            Less than Rs. 300
          </button>
        </div>
      </div>

      {/* Sort Section */}
      <div className="sort-section" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <select onChange={handleSortChange} value={sortBy} style={selectStyle}>
          <option value="Relevance (Default)">Relevance (Default)</option>
          <option value="Delivery Time">Delivery Time</option>
          <option value="Rating">Rating</option>
          <option value="Cost: Low to High">Cost: Low to High</option>
          <option value="Cost: High to Low">Cost: High to Low</option>
        </select>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => handleVegNonVegChange('Veg')} style={filterButtonStyle}>
            Veg
          </button>
          <button onClick={() => handleVegNonVegChange('Non-Veg')} style={filterButtonStyle}>
            Non-Veg
          </button>
        </div>
      </div>

      {/* Apply Button */}
      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <button style={applyButtonStyle}>Apply</button>
      </div>
    </div>
  );
};



export default FilterSortSection;
