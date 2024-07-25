import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrders } from "../utils/APIroutes";
import compass from "../assets/compass.svg";
import OrderCard from "../components/TrackOrderPageComponents/OrderCard";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const TrackOrderPage = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  const [orders, setOrders] = useState([]);
  let content = <div>Loading...</div>;
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${getOrders}/${id}`);
        setOrders(response.data.data);        
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, []);
  return ( <div>
    <div>
      <div className="w-full bg-blue-400 h-12 flex gap-4 justify-center items-center ">
        <img src={compass} alt="" />
        <div className="text-3xl text-white">Your Ordered Products</div>
        <div onClick={()=>navigate('/profile')} className="bg-blue-600 text-white hover:bg-blue-900 cursor-pointer p-1 w-16 text-center rounded-md">Back</div>
      </div>
    {
      orders.map((order)=>{
        return <OrderCard key={order._id} product={order.product} quantity={order.quantity} status={order.currentState} amount={order.price} OrderId={order._id}/>  // replace OrderCard component with your own component to display order details
      })
    }
    </div>
  </div>);
};

export default TrackOrderPage;
