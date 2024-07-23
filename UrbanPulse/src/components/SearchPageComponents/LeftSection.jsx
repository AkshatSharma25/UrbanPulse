import React from "react";
import FilterComponent from "./FilterComponent";
const filters = [
  { id: 1, name: 'Price Range', type: 'range', options: [] },
  { id: 2, name: 'Brand', type: 'checkbox', options: ['Nike', 'Adidas', 'Apple', 'Samsung', 'Sony'] },
  { id: 3, name: 'Product Category', type: 'select', options: ['Electronics', 'Clothing', 'Home & Kitchen', 'Sports & Outdoors'] },
  { id: 4, name: 'Size', type: 'checkbox', options: ['Small', 'Medium', 'Large', 'XL'] },
  { id: 5, name: 'Color', type: 'checkbox', options: ['Red', 'Blue', 'Black', 'White', 'Green'] },
  { id: 6, name: 'Rating & Reviews', type: 'checkbox', options: ['4 stars & up', '3 stars & up', '2 stars & up', '1 star & up'] },
  { id: 7, name: 'Availability', type: 'checkbox', options: ['In Stock', 'Out of Stock'] },
  { id: 8, name: 'New Arrivals', type: 'checkbox', options: ['Last 7 days', 'Last 30 days', 'Last 90 days'] },
  { id: 9, name: 'Discounts & Offers', type: 'checkbox', options: ['On Sale', 'Clearance', 'Coupon Available'] },
  { id: 10, name: 'Shipping Options', type: 'checkbox', options: ['Free Shipping', 'Expedited Shipping'] },
  { id: 11, name: 'Material/Composition', type: 'checkbox', options: ['Cotton', 'Leather', 'Metal', 'Plastic'] },
  { id: 12, name: 'Features', type: 'checkbox', options: ['Waterproof', 'Wireless', 'Bluetooth Enabled', 'UV Protection'] },
  { id: 13, name: 'Compatibility', type: 'checkbox', options: ['iPhone Compatible', 'Android Compatible', 'Windows Compatible'] },
  { id: 14, name: 'Customer Ratings', type: 'checkbox', options: ['Highly Rated', 'Most Reviewed'] },
  // Additional filters can be added as needed
];

const LeftSection = () => {
  return (
    <div>
      <div className="w-[20vw] bg-[#36C2CE] h-full overflow-auto overflow-x-hidden">
        <div className="w-full flex justify-center items-center text-3xl p-3">
          Filters
        </div>
        {filters.map((filter) => {
          return (
            <div id={filter.id}>
              <div className="w-full flex justify-center items-center p-3 m-3 text-xl">
                {filter.name}
              </div>
              <FilterComponent filterName={"Price"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSection;
