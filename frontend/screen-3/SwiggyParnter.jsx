import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SwiggyPartner = () => {
  const [number,setNumber] = useState("");
  const navigate = useNavigate();

  const handlenumber = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/Mobile/sendNumber",{phoneNumber:number})
    .then(() => {
      alert("Mobile number register successfully")
      // setNumber("")
      navigate("/SinghReastaurentOffer");
    })
    .catch((err) => {console.log(err)})



  
  } 
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-black text-white">
        <img
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1500&q=80"
          alt="background"
          className="w-full h-[400px] object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-10">
          <div className="max-w-xl">
            <h3 className="text-orange-500 font-semibold text-sm">PARTNER WITH Singh Restaurent!</h3>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">Reach customers far away from you</h1>
          </div>
          <div  className="bg-white text-gray-800 rounded-xl shadow-lg w-full max-w-sm mt-10 lg:mt-0 p-6">
           <form action="" onSubmit={handlenumber}>

 <h2 className="text-lg font-semibold mb-4">Get Started</h2>
            <p className="text-sm mb-2">Enter a mobile number or restaurant ID to continue</p>
            <input
              type="text"
              placeholder="Enter Restaurant ID / Mobile number"
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
              value={number}
              onChange={e => setNumber(e.target.value)}  
            />
            <button type='submit' className="w-full bg-black text-white py-2 rounded-md cursor-pointer">Continue</button>
            <p className="text-xs mt-3">
              By logging in, I agree to Singh Restaurent’s <a href="#" className="underline">terms & conditions</a>
            </p>
           </form>
           
          </div>
        </div>
      </div>

      {/* 3-Step Section */}
      <section className="py-10 px-6 md:px-16 bg-white grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h3 className="text-sm text-gray-500 mb-1">In just 3 easy steps</h3>
          <h2 className="text-xl font-semibold mb-6">Get your restaurant delivery-ready in 24hrs!</h2>
          <div className="space-y-6 text-sm">
            <div className="flex items-start">
              <div className="text-purple-600 font-bold mr-2">●</div>
              <div>
                <span className="font-bold">STEP 1</span><br />
                Install the Singh Restaurent Owner App
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-purple-600 font-bold mr-2">●</div>
              <div>
                <span className="font-bold">STEP 2</span><br />
                Login/Register using your phone number
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-purple-600 font-bold mr-2">●</div>
              <div>
                <span className="font-bold">STEP 3</span><br />
                Enter restaurant details
              </div>
            </div>
          </div>
        </div>

        {/* Document Checklist */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-sm mb-2">For an easy form filling process,</h3>
          <p className="text-sm mb-4">you can keep these documents handy.</p>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>• FSSAI License copy <a href="#" className="text-orange-500 underline">Apply Here</a></li>
            <li>• Your Restaurant menu</li>
            <li>• Bank details</li>
            <li>• GSTIN <a href="#" className="text-orange-500 underline">Apply Here</a></li>
            <li>• PAN card copy</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SwiggyPartner;
