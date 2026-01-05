import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// 🔹 Core Pages
import Home from "./Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

// 🔹 Lazy Loaded Pages (Performance Optimized)
const Screenroute = lazy(() => import("./screen-2/screenroute"));
const ScreenRoute = lazy(() => import("../screen-3/ScreenRoute"));
const MainComponents = lazy(() => import("./businesspart/mainComponents"));
const DeliveringForEveryone = lazy(() => import("./screen-2/deliverysection"));
const FoodItems = lazy(() => import("../screen-3/FoodItem"));
const SwiggyDineoutBanner = lazy(() => import("../screen-3/SwiggyDeanut"));
const Cart = lazy(() => import("../screen-3/Cart"));

// 🔹 Fallback Loader
const Loader = () => (
  <div className="flex items-center justify-center h-screen text-lg font-semibold">
    Loading...
  </div>
);

// 🔹 404 Page
const NotFound = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-3xl font-bold">404</h1>
    <p className="text-gray-500">Page Not Found</p>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* 🏠 Home */}
        <Route path="/" element={<Home />} />

        {/* 🔐 Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* 📦 Feature Routes */}
        <Route path="/route-2" element={<Screenroute />} />
        <Route path="/route-3" element={<ScreenRoute />} />
        <Route path="/businesses" element={<MainComponents />} />
        <Route path="/delivery" element={<DeliveringForEveryone />} />
        <Route path="/food-items" element={<FoodItems />} />
        <Route
          path="/singh-restaurant-offer"
          element={<SwiggyDineoutBanner />}
        />
        <Route path="/cart" element={<Cart />} />

        {/* ❌ 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;

