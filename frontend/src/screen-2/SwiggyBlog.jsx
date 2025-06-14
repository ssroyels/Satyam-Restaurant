import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';


const SwiggyBlog = () => {
  const scrollRef = useRef(null);
  const [fetchBlog,setFetchBlog] = useState([]);

  useEffect(() => {
    const getBlog = async () => {
      const response = await axios.get("http://localhost:5000/Blog/getBlog");
      
      setFetchBlog(response.data.BlogStore);

    }
    getBlog();

  },[])

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -width : width,
      behavior: 'smooth',
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-extrabold text-center mb-6 flex justify-center items-center gap-4">
        <span className="border-t-2 border-orange-500 w-10"></span>
        Singh-Restaurent BLOG
        <span className="border-t-2 border-orange-500 w-10"></span>
      </h2>

      {/* Arrows */}
      <div className="flex justify-end gap-2 mb-4">
        <button onClick={() => scroll('left')} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          <ChevronLeft />
        </button>
        <button onClick={() => scroll('right')} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          <ChevronRight />
        </button>
      </div>

      {/* Card Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4"
      >
        {fetchBlog.map((post, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start bg-white rounded-3xl shadow-md border hover:shadow-lg w-80 sm:w-[45%] md:w-[30%]"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-44 object-cover rounded-t-3xl"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h3 className="text-md font-semibold text-gray-800 mb-4">{post.title}</h3>
              <button className="bg-orange-100 text-orange-600 px-4 py-2 rounded-md text-sm font-medium">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Explore Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-xl font-medium hover:bg-orange-600">
          Explore
        </button>
      </div>
    </section>
  );
};

export default SwiggyBlog;
