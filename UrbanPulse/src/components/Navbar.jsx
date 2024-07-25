import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import cart from "../assets/cart.svg";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import search from "../assets/search.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Profile", href: "/profile", current: false },
  { name: "My Orders", href: "/profile", current: false },
  { name: "About", href: "#", current: false },
];
import logo from "../assets/logo.png";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const navigate = useNavigate();
  // const [user, setuser] = useState(undefined);
  const [loginArea, setloginArea] = useState();
  useEffect(() => {
    const doIt = async () => {
      let user = await JSON.parse(localStorage.getItem("user"));
      let content = (
        <div className="m-2 ml-6 rounded-md text-white bg-blue-500 p-2">
          <button>
            <button onClick={() => navigate("/login")}>Login</button>
          </button>
        </div>
      );
      let content2 = (
        <div className="flex gap-2">
          

          <button
            className="m-2 rounded-md text-white bg-blue-500 p-2"
            onClick={() => {
              localStorage.removeItem("user");
              setloginArea(content);
              window.location.reload();
            }}
          >
            Logout
          </button>
        </div>
      );

      if (user === null) {
        setloginArea(content);
      } else {
        setloginArea(content2);
      }
    };
    doIt();
  }, []);
  const handleCart=()=>{
    navigate('/cart');
  }


  return (
      <div className={`mx-auto  px-2  sm:px-6 lg:px-8 bg-blue-900 w-full relative `}>
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div onClick={()=>{navigate('/')}} className="cursor-pointer flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src={logo}
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-blue-500 text-white w-[50%] m-12 flex justify-center items-center rounded-md cursor-pointer h-8">
            <button
              onClick={() => {
                navigate("/search");
              }}
              className="flex items-center justify-center"
            >
              <img src={search} alt="" className="mr-4" /> Search Anything
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div onClick={()=>{handleCart()}} className="bg-blue-500 cursor-pointer p-2 rounded-md">
              <img src={cart} alt="" />
          </div>
            {loginArea}
          </div>
        </div>
      </div>

      
  );
}
