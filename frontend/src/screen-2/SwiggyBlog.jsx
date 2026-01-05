import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import axios from "../config/axios.js";

const SwiggyBlog = () => {
  const scrollRef = useRef(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH BLOGS ================= */
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get("/Blog/getBlog", {
          withCredentials: true,
        });
        setBlogs(res.data?.BlogStore || []);
      } catch (err) {
        console.error("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  /* ================= SCROLL ================= */
  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* ================= HEADER ================= */}
      <div className="text-center mb-10">
        <span className="inline-block mb-2 px-4 py-1 text-xs font-semibold tracking-widest text-orange-600 bg-orange-100 rounded-full">
          SINGH RESTAURANT BLOG
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Stories, Food & Insights 🍽️
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Discover food trends, kitchen stories, and updates from the world of
          Singh Restaurant.
        </p>
      </div>

      {/* ================= CONTROLS ================= */}
      <div className="flex justify-end gap-3 mb-4">
        <button
          onClick={() => scroll("left")}
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
        >
          <ChevronRight />
        </button>
      </div>

      {/* ================= BLOG CAROUSEL ================= */}
      {loading ? (
        <p className="text-center text-gray-500">Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p className="text-center text-gray-500">
          No blogs available right now.
        </p>
      ) : (
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
        >
          {blogs.map((post, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 sm:w-[45%] md:w-[30%] bg-white rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* IMAGE */}
              <div className="relative h-44 overflow-hidden rounded-t-3xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                  Singh Blog
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <Clock size={14} />
                  <span>{post.readTime || "3 min read"}</span>
                </div>

                <h3 className="text-md font-semibold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <button className="text-sm font-semibold text-orange-600 hover:underline">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ================= EXPLORE ================= */}
      <div className="flex justify-center mt-10">
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
          Explore Singh Blogs
        </button>
      </div>
    </section>
  );
};

export default SwiggyBlog;
