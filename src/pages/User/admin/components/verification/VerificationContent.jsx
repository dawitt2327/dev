import React from "react";
import image1 from "../../../../../assets/images/carousel-1.jpg";
import image2 from "../../../../../assets/images/carousel-2.jpg";
const VerificationContent = () => {
  return (
    <div className="flex flex-col bg-gray-50rounded-md shadow-sm gap-4 w-full px-4">
      {/* <div className="flex gap-3">
        <p className="">FIRST NAME</p>
        <p>LAST NAME</p>
        <p>EMAIL ADDRESS</p>
        <p>ROLE</p>
        <p>REQUEST TIME</p>
      </div> */}
      <div>
        <p className="text-slate-800 mb-3">ID DOCUMENT:</p>
        <img src={image2} alt="" />
        <p className="text-slate-800 my-3">BUSSINESS LICENSE</p>
        <img src={image1} alt="" />
      </div>
      <div className="flex gap-4">
        <button className="hover:bg-purple-500 bg-purple-600 rounded-md p-2 text-white text-lg">
          Approve Document
        </button>
        <button className="bg-red-500 hover:bg-red-600 rounded-md p-2 text-white text-lg">
          Decline Document
        </button>
      </div>
    </div>
  );
};

export default VerificationContent;
