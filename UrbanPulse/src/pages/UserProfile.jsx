import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultProfile from "../assets/account.svg"
import LeftSection from "../components/ProfilePageComponents/LeftSection";
import RightSection from "../components/ProfilePageComponents/RightSection";
const ProfilePage = () => {
  const navigate = useNavigate();
  const [profileImage, setprofileImage] = useState('https://api.multiavatar.com/45678945/4');
  const [user, setUser] = useState({});
    useEffect(()=>{
      const storageUser=localStorage.getItem('user');
      if(!storageUser){
        navigate('/login');
      }
      else{
        setUser(JSON.parse(storageUser));
      setprofileImage(user.profilePicture);
      // console.log(profileImage);
      if(profileImage==''){
        setprofileImage(defaultProfile)
      }
      }
    },[]);
  return (
    <div className="flex">
      <LeftSection username={user.username} email={user.email} address={user.address}/>
      <RightSection />
    </div>
  );
};

export default ProfilePage;
