import React from 'react';
import logo from "../assets/logo.png"
const Footer = () => {
  // const text = useSelector((state) => state.text.text);

  return (

    <footer className="text-white body-font bg-gray-700">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a href="#" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
           <img src={logo} width={100} alt="" />
            <span className="ml-3 text-xl">UrbanPulse</span>
          </a>
          <p className="mt-2 text-sm text-white">Shop Smart, Shop Easy: Your Gateway to Online Bliss!</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/" className="text-white hover:text-gray-800">Electronics</a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-gray-800">Health and Lifestyle</a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-gray-800">Clothes</a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-gray-800">Others</a>
              </li>
            </nav>
          </div>
          
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/" className="text-white hover:text-gray-800">Health and Beauty</a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-gray-800">Mobile Phones</a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-gray-800">Home and Decor</a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-gray-800">Accessories</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/" className="text-white hover:text-gray-800">Gadgets</a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-gray-800">Services</a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-gray-800">Music and More</a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-gray-800">Laptops</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">OTHER LINKS</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/profile" className="text-white hover:text-gray-800">Profile</a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-gray-800">About</a>
              </li>
              <li>
                <a href="/search" className="text-white hover:text-gray-800">Search Products</a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-gray-800">Customer</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm text-center sm:text-left">© 2024 UrbanPulse —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-white ml-1" target="_blank">@akshat</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="#" className="text-white">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-white">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-white">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-white">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
