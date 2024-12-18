import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useParams } from "react-router-dom";
import { GetProduct } from "../utils/APIroutes";
import axios from "axios";
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from "react-router-dom";
import { orderProduct } from "../utils/APIroutes";
const OrderSummaryPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [deliveryDate, setDeliveryDate] = useState("15");
  const [Product, setProduct] = useState({
    name: "loading...",
    tagline: "loading...",
    imageUrls: ["http://localhost:3000/uploads/xyz.png"],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    username: "loading...",
    address: "loading...",
  });
  const [quantity, setQuantity] = useState(1);
  const handleDeliveryDate = () => {
    const date = new Date();
    const currentDate = date.getDate();
    const currentMonth = date.getMonth();
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    // console.log(date.getDate());
    let rem = date.getDate() - currentDate;
    // console.log(rem);
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (rem < 7) {
      setDeliveryDate(`${date.getDate() + rem} ${month[date.getMonth()]}`);
    } else {
      setDeliveryDate(`${currentDate + 7} ${month[currentMonth]}`);
    }
  };
  const handleCheckout = async () => {
    const date = new Date();
    const currentDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    const req = {
      product: Product._id,
      price: Product.price * quantity,
      user: user._id,
      quantity: quantity,
      seller: Product.seller,
      orderDate: currentDate,
      currentState: "ordered",
      isDelivered: false,
    };
    try {
      const response = await axios.post(`${orderProduct}`, req);
      navigate(`/profile/orders/${user._id}`);
    } catch (error) {
      console.log("error");
    }
    // console.log(req);
  };
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const product = await axios.get(`${GetProduct}/${id}`);
        setProduct(product.data.data);
        handleDeliveryDate();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchUserDetails = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      // console.log(user);
      setUser(user);
      if (user === null) {
        navigate("/login");
      }
    };
    fetchUserDetails();
    fetchProductDetails();
    setIsLoading(false);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
          <div>
            <NavBar/>
          <div className=" flex justify-center items-center gap-3 bg-blue-600 h-16">
            <img src={logo} width={70} alt="" />
            <div className="flex justify-center flex-col">
              <div className="text-white text-3xl">UrbanPulse - Checkout</div>
              <div className="text-white">Order Summary</div>
            </div>
          </div>
          <div className="flex w-full p-8 h-[83vh]">
            <div className="left bg-gray-100 h-full w-2/3 flex p-2">
              <div className="image bg-white  max-w-[600px]">
                <img src={Product.imageUrls[0]} alt="" />
              </div>
              <div className="description p-8">
                <div className="text-2xl">{Product.name}</div>
                <div className="text-sm mb-4 flex pr-0 flex-wrap ">
                  {Product.description}
                </div>
                <div className="flex w-full">
                  <div className="text-xl">
                    Price
                    <div className="text-3xl">₹ {Product.price}</div>
                  </div>
                  <div className="ml-8">
                    Quantity
                    <div className="flex gap-5">
                      <button
                        className="text-2xl text-gray-900"
                        onClick={() => {
                          setQuantity(quantity - 1);
                        }}
                      >
                        -
                      </button>
                      <div className="text-2xl">{quantity}</div>
                      <button
                        className="text-2xl text-gray-900"
                        onClick={() => {
                          setQuantity(quantity + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-12 text-xl">Items Total</div>
                  <div className="text-3xl mb-4">
                    ₹ {Product.price * quantity}
                  </div>
                </div>
                <div>
                  <div className="text-xl">Delivery Address:</div>
                  <div>{`${user.username.toUpperCase()}`}</div>
                  <div>{`${user.address.toUpperCase()}`}</div>
                </div>
                <div className="mt-4 text-sm">
                  <div>*free shipping for your first order</div>
                  <div>Expected Delivery: {deliveryDate}</div>
                  <div
                    onClick={() => {
                      navigate("/");
                    }}
                    className="cursor-pointer text-red-400 bg-blue-200 rounded-md text-xl text-center m-3"
                  >
                    Cancel Order
                  </div>
                </div>
              </div>
            </div>
            <div className="right bg-gray-200 w-1/3 h-[90%] p-4">
              <div className="text-3xl w-full text-center">
                Order Summary
              </div>
              <div className=" text-xl w-full text-center text-red-400">
                Subtotal : ₹ {Product.price * quantity}
              </div>
              <div className=" text-xl w-full text-center text-red-400">
                Please Select Payment Option
              </div>
              <div className="bg-blue-400 text-xl flex items-center justify-center w-full h-16 mt-2 p-3 rounded-md">
                Google Pay
              </div>
              <div className="bg-blue-400 w-full text-xl flex items-center justify-center h-16 mt-2 p-3 rounded-md">
                Axis Bank Credit
              </div>
              <div className="bg-blue-400 w-full text-xl flex items-center justify-center h-16 mt-2 p-3 rounded-md">
                PayPal
              </div>
              <div className="bg-blue-400 w-full text-xl flex items-center justify-center h-16 mt-2 p-3 rounded-md">
                Cash on Delivery
              </div>
              <div className="text-xs">*Terms and Conditions apply</div>
              <div
                onClick={() => {
                  handleCheckout();
                }}
                className="bg-red-400 w-full h-12  p-3 rounded-md text-2xl text-white flex justify-center items-center cursor-pointer"
              >
                CheckOut
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>

  );
};

export default OrderSummaryPage;
