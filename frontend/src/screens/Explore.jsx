import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  {
    title: 'Fresh Salads',
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop',
  },
  {
    title: 'Grilled Wraps',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Sweet Cakes',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Hearty Meals',
    image: 'https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?q=80&w=1964&auto=format&fit=crop',
  },
  {
    title: 'Biryani Specials',
    image: 'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: "Sizzling Sizzlers",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop",
  },
  {
    title: "Cheesy Pizzas",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Spicy Tacos",
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2076&auto=format&fit=crop",
  },
  {
    title: "Juicy Burgers",
    image: "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=2030&auto=format&fit=crop",
  },
  {
    title: "Chilled Beverages",
    image: "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=1974&auto=format&fit=crop",
  }
];

const ExploreMenu = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/foodItems")
  }
  return (
    <div className="mt-20 mb-20 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Explore Our Menu</h1>
      <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-10">
        Choose from a wide variety of delicious meals crafted with care. Whether you're craving something light or hearty, we’ve got something for everyone.
      </p>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="w-full max-w-7xl mx-auto"
      >
        {menuItems.map((item, index) => (

          // <form action="" key={index} onSubmit={submitHandler}>
             <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={`Delicious ${item.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Enjoy our special {item.title.toLowerCase()} made with love and the freshest ingredients.
                </p>

                <button onClick={submitHandler}
                  className="mt-4 px-4 cursor-pointer py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors"
                  aria-label={`Order ${item.title}`}
                >
                  Order Now
                </button>
              </div>
            </div>
          </SwiperSlide>


         
        ))}
      </Swiper>
    </div>
  );
};

export default ExploreMenu;


