import React, { useEffect, useState } from "react";
import cart from "../assets/cart.svg"
import { useParams } from "react-router-dom";
import { getCartItems } from "../utils/APIroutes";
import axios from "axios";
import ItemCard from "../components/CartPage/ItemCard";
import {useNavigate} from "react-router-dom"
const CartPage = () => {
  const navigate=useNavigate();
  const [items, setitems] = useState([]);
  let content = <div>Loading...</div>;
  useEffect(() => {
    const fetchitems = async () => {
      try {
        const userData= await JSON.parse(localStorage.getItem('user'));
        if(userData===null || userData===undefined){
          navigate('/login');
        }
        if(userData._id){

          const response = await axios.get(`${getCartItems}/${userData._id}`);
          // console.log(response.data.data[0].items);
          setitems(response.data.data[0].items);        
          // console.log(items.length);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchitems();
  }, []);
  return ( 
    <div>
      <div className="w-full bg-blue-400 h-12 flex gap-4 justify-center items-center ">
        <img src={cart} alt="" />
        <div className="text-3xl text-white">Your Cart</div>
        <div onClick={()=>navigate('/')} className="bg-blue-600 text-white hover:bg-blue-900 cursor-pointer p-1 w-16 text-center rounded-md">Back</div>
      </div>
    {
      items.map((item)=>{

        return( 
          
        <ItemCard key={item._id} itemId={item.product}/>
          
        )
      })
    }
    </div>
  );
};

export default CartPage;
