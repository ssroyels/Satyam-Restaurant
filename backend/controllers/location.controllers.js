import Location from "../model/location.model.js";

export  const locationController = async (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    return res.status(400).json({ message: "Coordinates missing" });
  }

  try {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
    const response = await axios.get(url, {
      headers: {
        "User-Agent": "my-location-app" // Required by OpenStreetMap
      }
    });

    return res.json(response.data);
  } catch (err) {
    console.error("Reverse geocoding failed:", err.message);
    res.status(500).json({ message: "Error fetching location name" });
  }
};