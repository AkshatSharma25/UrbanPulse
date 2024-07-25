import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GetProduct } from "../../utils/APIroutes";
import {deleteOrder} from "../../utils/APIroutes";
const OrderCard = ({ product, quantity, status, amount,OrderId }) => {
  const navigate=useNavigate();
  const [Product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const stateOfProduct = {
    ordered: 1,
    dispatched: 2,
    shipped: 3,
    delivered: 4,
    // "cancelled":5
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(OrderId);
        const response = await axios.get(`${GetProduct}/${product}`);
        // console.log(response.data);
        setProduct(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // console.log(status);
  }, []);
  const handleCancel = async() => {
    const response=await axios.delete(`${deleteOrder}/${OrderId}`);
    
    if(response.data.success){  
      window.location.reload();
    }
  }
  return (
    <div>
      {loading === true ? (
        <div>Loading...</div>
      ) : (
        <div>
          {/* <div>Navbar</div> */}
          <div className="flex justify-center">
            <div className={`w-full h-80 bg-gray-200 flex p-4 m-4 rounded-md`}>
              <div className="w-[20%] ">
                <img
                  src={Product.imageUrls[0]}
                  className="w-72 bg-white rounded-md"
                  alt=""
                />
              </div>
              <div className=" w-[80%] p-8 flex flex-col gap-2 rounded-md bg-gray-100">
                <div className="flex justify-center flex-col  h-12 mb-6">
                  <div
                    className={`bg-blue-400 w-[${
                      20 * stateOfProduct[status]
                    }%] ml-8 mb-2 h-1`}
                  ></div>
                  <div className="text-xs flex justify-around ml-8 gap-2 mr-8">
                    <div className=" w-full">Ordered</div>
                    <div className=" w-full">Dispatched</div>
                    <div className=" w-full">Shipped</div>
                    <div className=" w-full">Delivered</div>
                  </div>
                </div>
                <div className="flex justify-between ml-8 mr-8">
                  <div className="flex flex-col gap-3">
                    <div className="text-2xl">{Product.name}</div>
                    <div>{Product.tagLine}</div>
                    <div>Quantity: {quantity}</div>
                    <div className="text-red-400">Amount: ₹ {amount}</div>
                  </div>
                  <div onClick={()=>handleCancel()} className="h-10 w-28 text-white cursor-pointer flex justify-center items-center rounded-md bg-red-400 mr-20">
                    Cancel Order
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderCard;
