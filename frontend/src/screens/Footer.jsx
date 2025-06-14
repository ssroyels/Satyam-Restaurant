import React from 'react'

const Footer = () => {
  return (
 <div className="bg-gray-100">

  {/* <!-- Footer --> */}
  <footer className="bg-gray-100 px-6 py-10 text-sm text-gray-800">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      
      {/* <!-- Swiggy Logo & Copyright --> */}
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-2">
          <img src="https://img.freepik.com/premium-vector/pick-eat-logo-design-concept-fit-food-marketplace-application-restaurant-delivery-order-services-etc-red-white-color-identity_228967-1938.jpg" alt="Swiggy" className="h-8 w-8" />
          <span className="text-xl font-bold text-orange-400">Singh-Restaurent</span>
        </div>
        <p className="text-gray-600">© 2025 Singh Limited</p>
      </div>

      {/* <!-- Company --> */}
      <div>
        <h3 className="font-semibold mb-2">Company</h3>
        <ul className="space-y-1">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Singh Corporate</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Singh One</a></li>
          <li><a href="#">Singh Instamart</a></li>
          <li><a href="#">Singh Dineout</a></li>
          <li><a href="#">Singh Genie</a></li>
          <li><a href="#">Minis</a></li>
          <li><a href="#">Pyng</a></li>
        </ul>
      </div>

  
      <div>
        <h3 className="font-semibold mb-2">Contact us</h3>
        <ul className="space-y-1">
          <li><a href="#">Help & Support</a></li>
          <li><a href="#">Partner With Us</a></li>
          <li><a href="#">Ride With Us</a></li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Legal</h3>
        <ul className="space-y-1">
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Cookie Policy</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

     
      <div>
        <h3 className="font-semibold mb-2">Available in:</h3>
        <ul className="space-y-1">
          <li>Bangalore</li>
          <li>Gurgaon</li>
          <li>Hyderabad</li>
          <li>Delhi</li>
          <li>Mumbai</li>
          <li>Pune</li>
        </ul>

        <select className="mt-3 p-2 rounded border text-gray-700 w-full">
          <option>685 cities</option>
        </select>
      </div>

    
      <div>
        <h3 className="font-semibold mb-2">Life at Singh</h3>
        <ul className="space-y-1">
          <li><a href="#">Explore With Singh</a></li>
          <li><a href="#">Singh News</a></li>
          <li><a href="#">Snackables</a></li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Social Links</h3>
        <div className="flex gap-3 text-xl">
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>

    <hr className="my-8 border-gray-300" />

   
    <div className="text-center">
      <p className="font-semibold text-lg mb-4">For better experience, download the Singh app now</p>
      <div className="flex justify-center gap-6">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v52tLnvL3FEjfxjPvZWbvUMYvVUtAm9R6A&s" alt="App Store" className="h-12" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="Play Store" className="h-12" />
      </div>
    </div>
  </footer>

  
  <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>

</div>
  )
}

export default Footer
