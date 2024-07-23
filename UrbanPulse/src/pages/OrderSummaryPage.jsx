import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useParams } from "react-router-dom";
import { GetProduct } from "../utils/APIroutes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { orderProduct } from "../utils/APIroutes";
const OrderSummaryPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [deliveryDate, setDeliveryDate] = useState("15");
  const [Product, setProduct] = useState({
    name: "loading...",
    tagline: "loading...",
    imageUrls: ["http://localhost:3050/uploads/xyz.png"],
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
          <div className="w-[100vw] flex justify-center items-center gap-3 bg-blue-600 h-16">
            <img src={logo} width={70} alt="" />
            <div className="flex justify-center flex-col">
              <div className="text-white text-3xl">UrbanPulse - Checkout</div>
              <div className="text-white">Order Summary</div>
            </div>
          </div>
          <div className="flex w-full p-8 h-[90vh]">
            <div className="left bg-gray-100 w-2/3 flex p-4">
              <div className="image bg-white  max-w-[600px]">
                <img src={Product.imageUrls[0]} alt="" />
              </div>
              <div className="description p-8">
                <div className="text-2xl mb-3">{Product.name}</div>
                <div className="text-sm mb-10 flex pr-0 flex-wrap lg:max-w-[200px]">
                  {Product.description}
                </div>
                <div className="flex w-full">
                  <div className="text-xl">
                    price
                    <div className="text-3xl">₹ {Product.price}</div>
                  </div>
                  <div className="ml-8">
                    quantity
                    <div className="flex gap-5">
                      <button
                        className="text-2xl text-gray-900"
                        onClick={() => {
                          setQuantity(quantity - 1);
                        }}
                      >
                        -
                      </button>
                      <div className="text-3xl">{quantity}</div>
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
                  <div className="mt-12 text-2xl">items total</div>
                  <div className="text-3xl mb-4">
                    ₹ {Product.price * quantity}
                  </div>
                </div>
                <div>
                  <div className="text-xl">Delivery Address:</div>
                  <div>{`${user.username}`}</div>
                  <div>{`${user.address}`}</div>
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
            <div className="right bg-gray-200 w-1/3 p-8">
              <div className="text-3xl m-2 w-full text-center">
                Order Summary
              </div>
              <div className="m-2 text-xl w-full text-center text-red-400">
                Subtotal : ₹ {Product.price * quantity}
              </div>
              <div className="bg-blue-400 w-full h-20 m-2 p-3 rounded-md">
                PayPal
              </div>
              <div className="bg-blue-400 w-full h-20 m-2 p-3 rounded-md">
                PayPal
              </div>
              <div className="bg-blue-400 w-full h-20 m-2 p-3 rounded-md">
                PayPal
              </div>
              <div className="bg-blue-400 w-full h-20 m-2 p-3 rounded-md">
                PayPal
              </div>
              <div className="text-xs">*Terms and Conditions apply</div>
              <div
                onClick={() => {
                  handleCheckout();
                }}
                className="bg-red-400 w-full h-20 ml-2 p-3 rounded-md text-2xl text-white flex justify-center items-center cursor-pointer"
              >
                CheckOut
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummaryPage;
