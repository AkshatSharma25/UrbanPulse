import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {removeItemFromCart} from "../../utils/APIroutes";
import { useNavigate } from 'react-router-dom';
import { GetProduct } from '../../utils/APIroutes';
const ItemCard = ({itemId}) => {
    const navigate = useNavigate();
    const [Product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${GetProduct}/${itemId}`);
            // console.log(itemId);
            setProduct(response.data.data);
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
        
      }, []);
      const handleOrder=()=>{
        navigate(`/order/${itemId}`);
      }
      const handleRemove=async()=>{
        try{
            const user=JSON.parse(localStorage.getItem('user'));
            if(!user){
                navigate('/login');
            }
            const response=await axios.put(`${removeItemFromCart}`,{
                user:user._id,
                product:itemId
            });
            if(response.data.success){
                alert('Item removed from cart successfully');
                window.location.reload();
            }
            console.log(response.data);
        }
        catch(error){
            console.log(error);
        }
      }
  return (
    <div>
      {loading === true ? (
        <div>Loading...</div>
      ) : (
    <div>
      <div>
          <div className="flex justify-center">
            <div className={`w-full h-80 bg-gray-200 flex p-4 m-4 rounded-md`}>
              <div className="w-[20%] overflow-hidden h-72">
                <div className='overflow-hidden h-72 w-72 rounded-md'>
                <img
                  src={Product.imageUrls[0]}
                  className="bg-white rounded-md"
                  alt="image"
                />
                </div>
              </div>
              <div className=" w-[80%] p-8 flex flex-col gap-2 rounded-md bg-gray-100">
                
                <div className="flex justify-between h-full ml-8 mr-8">
                  <div className="flex flex-col gap-3">
                    <div className="text-2xl">{Product.name}</div>
                    <div>{Product.tagLine}</div> 
                    <div className="text-xl">Price: ₹ {Product.price}</div>
                    <div>{Product.description}</div>  
                  </div>
                  <div className='flex flex-col gap-3 h-full items-center justify-center'>
                  <div onClick={()=>handleOrder()} className="h-10 w-28 text-white cursor-pointer flex justify-center items-center rounded-md bg-red-400 mr-20">
                    Order Now
                  </div>
                  <div onClick={()=>handleRemove()} className="h-10 w-28 text-white cursor-pointer flex justify-center items-center rounded-md bg-red-400 mr-20">
                    Remove
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>)}
    </div>
  )
}

export default ItemCard
