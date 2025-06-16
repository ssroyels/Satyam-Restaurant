// app.js or index.js
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import  userRoutes from "./routes/user.routes.js"
import ItemRoutes from "./routes/item.routes.js"
import LocationRoutes from "./routes/location.routes.js";
import TeamRoutes from "./routes/team.routes.js"
import BlogRoutes from "./routes/Blog.routes.js"
import BusinessRoutes from "./routes/Business.routes.js";
import OtpMobile from "./routes/mobile.otp.routes.js"
import foodRoutes from "./routes/res.routes.js";
import supportRoutes from "./routes/support.routes.js"


dotenv.config();
const app = express();
app.use(cors({
  origin: 'https://satyam-restaurant-1.onrender.com', // or '*' for all origins (use with caution)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true // if you're using cookies or authorization headers
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});

app.use("/users",userRoutes);
app.use("/Item",ItemRoutes);
app.use("/api",LocationRoutes);
app.use("/Team",TeamRoutes)
app.use("/Blog",BlogRoutes);
app.use("/Business",BusinessRoutes);
app.use("/Mobile",OtpMobile)
app.use("/food",foodRoutes);
app.use("/support",supportRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));