import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultProfile from "../assets/account.svg";
import LeftSection from "../components/ProfilePageComponents/LeftSection";
import RightSection from "../components/ProfilePageComponents/RightSection";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [profileImage, setprofileImage] = useState(
    "https://api.multiavatar.com/45678945/4"
  );
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const MyParse = async () => {
      const storageUser = localStorage.getItem("user");
      if (!storageUser) {
        navigate("/login");
      } else {
        setUser(await JSON.parse(storageUser));
        setprofileImage(user.profilePicture);
        if (profileImage === "") {
          setprofileImage(defaultProfile);
        }
      }
      // console.log(user._id);
      setLoading(false);
    };
    MyParse();
  }, []);
  const content = (
    <div className="flex">
      <LeftSection
        id={user._id}
        username={user.username}
        profilePicture={profileImage}
        email={user.email}
        address={user.address}
      />
      <RightSection />
    </div>
  );
  return (
    <div className="flex">
      {isLoading ? (
        <div className="flex justify-center items-center w-[100vw] h-[100vh]">
          Loading...
        </div>
      ) : (
        content
      )}
    </div>
  );
};

export default ProfilePage;
