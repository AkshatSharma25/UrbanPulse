import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetProduct ,addToCart} from "../utils/APIroutes";
import NavBar from "../components/Navbar";
import {createCart} from "../utils/APIroutes";
import Footer from "../components/Footer";
import axios from "axios";
function ProductPage() {
  const { id } = useParams();
  const navigate=useNavigate();
  const [isLoading, setisLoading] = useState(true);
  const [addedToCart, setaddedToCart] = useState(false);
  const [availability, setavailability] = useState("In Stock");
  const [product, setproduct] = useState([]);
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await axios.get(`${GetProduct}/${id}`);
        setproduct(data.data.data);
        setisLoading(false);
        if (data.data.data.StockQuantity == 0) {
          setavailability("Out of stock");
        } else if (data.data.data.StockQuantity <= 100) {
          setavailability("Limited stock");
        }
        // console.log(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductDetails();
  }, []);
  const rating = new Array(product.ratings).fill(0);
  const handleAddToCart=async() => {
    // console.log("hello world")

    const user=localStorage.getItem('user');
    if(!user){
      navigate("/login");
    }
    else{
      setaddedToCart(true);
      const UserData=await JSON.parse(user);
      // console.log(UserData);
      if(!UserData.cart){
        const createdCart=await axios.post(createCart,{user:UserData._id});
        const toStore=JSON.stringify(createdCart.data.data);
        localStorage.setItem('user',toStore);
        const CartAdded=await axios.put(addToCart,{user:UserData._id,product:product._id});
        // console.log(CartAdded);
      }
      else{
        const CartAdded=await axios.put(addToCart,{user:UserData._id,product:product._id});
        // console.log(CartAdded);
      }
    }
  }
  const handlePurchase=()=>{
    navigate(`/order/${product._id}`);
  }
  return isLoading ? (
    <div>
      <NavBar />
      <div>Loading...</div>
    </div>
  ) : (
    <div>
      <NavBar />
      <div className="bg-gray-800 flex justify-center text-3xl p-3 pt-10 text-white">Product Description</div>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] overflow-hidden rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className=" w-full h-full object-cover"
                  src={product.imageUrls[0]}
                  alt="Product Image"
                />
              </div>
              
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {product.tagLine}
              </p>
              <div className="mr-4 mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {" "}
                  ₹ {product.price}
                </span>
              </div>
              <div className="flex flex-col mb-4">
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Availability:{" "}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {availability}
                  </span>
                </div>
              </div>
              {product.size.length > 0 && (
                <div className="mb-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Select Size:
                  </span>
                  <div className="flex items-center mt-2">
                    {product.size.map((size, index) => (
                      <button
                        key={index}
                        className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {product.color.length > 0 && (
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Select Color:
                  </span>
                  <div className="flex items-center mt-2 mb-4">
                    {product.color.map((size, index) => (
                      <button
                        key={index}
                        className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {product.description}
                </p>
              </div>
              <div className="flex -mx-2 mb-4 mt-12">
                <div className="w-1/2 px-2">
                  <button onClick={()=>{handleAddToCart()}} className={` w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700 ${addedToCart?"cursor-not-allowed bg-gray-600":""}`}>
                    {addedToCart?"Added to cart":"Add to Cart"}
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button onClick={()=>{handlePurchase()}} className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center">
          {rating.map(() => {
            <svg
              class="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>;
          })}
          <div className="mt-12">
            <span class="text-gray-600 dark:text-gray-300 text-3xl">
               Ratings and Reviews 

            </span>
            <div className="flex justify-center items-center">
            <p class="ms-1 text-xl font-medium text-gray-500 dark:text-gray-400">
            {product.ratings}
          </p>
          <p class="ms-1 text-xl font-medium text-gray-500 dark:text-gray-400">
            out of
          </p>
          <p class="ms-1 text-xl font-medium text-gray-500 dark:text-gray-400">
            5
          </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
