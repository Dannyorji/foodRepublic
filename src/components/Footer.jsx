import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" max-w-[1520px] m-auto px-4 py-2 bg-[#24262b] ">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-orange-500   ">
            FoodRepublic
          </h1>
          <p></p>
          <div className=" flex justify-between md:w-[75%] my-6 ">
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-[#9b9b9b]"></h6>
            <ul>
              <li className="py-2 text-sm">New York</li>
              <li className="py-2 text-sm">California</li>
              <li className="py-2 text-sm">Atlanta</li>
              <li className="py-2 text-sm">Texas</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]"></h6>
            <ul>
              <li className="py-2 text-sm">Brazil</li>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">Mexico</li>
              <li className="py-2 text-sm">Canada</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]"></h6>
            <ul>
              <li className="py-2 text-sm">Nigeria</li>
              <li className="py-2 text-sm">Ghana</li>
              <li className="py-2 text-sm">South Africa</li>
              <li className="py-2 text-sm">Tanzania</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]"></h6>
            <ul>
              <li className="py-2 text-sm">Korea</li>
              <li className="py-2 text-sm">Japan</li>
              <li className="py-2 text-sm">China</li>
              <li className="py-2 text-sm">Philippines</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]"></h6>
            <ul>
              <li className="py-2 text-sm">United Kingdom</li>
              <li className="py-2 text-sm">Italy</li>
              <li className="py-2 text-sm">Germany</li>
              <li className="py-2 text-sm">Netherlands</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between w-full text-lg">
          <p className=" text-white top-0">
            Copyright<span>&copy;</span> Daniel Orji
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
