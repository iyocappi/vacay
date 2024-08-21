const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3000;

var corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5173"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

// Serve the images from the 'client/assets/images' folder
app.use("/images", express.static(path.join(__dirname, "client/images")));

// Sample data
const data = [
  {
    id: 1,
    name: "Cory Moore",
    job: "Developer",
    mos: "11B-0934-INF",
    imageUrl: "/images/cory-moore.jpg",
  },
  {
    id: 2,
    name: "Timothy Anderson",
    job: "Designer",
    mos: "1N371-0934-MED",
    imageUrl: "/images/timothy-anderson.jpg",
  },
  // { id: 3, name: "Mike Johnson", job: "Manager" },
];

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, "client")));

// Serve search.html when accessing the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "search.html"));
});

// // Handle search requests
// app.get("/search", cors(corsOptions), (req, res) => {
//   const query = req.query.name.toLowerCase()
//   if (!query || query === "") {
//     return res.status(404).json({ message: "Nothing found" });
//   }
//   const filteredData = data.filter((item) =>
//     item.name.toLowerCase().includes(query)
//   );
//   res.json(filteredData);
// });

// Handle search requests
app.get("/search", cors(corsOptions), (req, res) => {
  const nameQuery = req.query.name ? req.query.name.toLowerCase() : null;
  const mosQuery = req.query.mos ? req.query.mos.trim() : null;

  if (!nameQuery && !mosQuery) {
    return res.status(404).json({ message: "Nothing found" });
  }

  const filteredData = data.filter((item) => {
    const nameMatches = nameQuery
      ? item.name.toLowerCase().includes(nameQuery)
      : true;
    const mosMatches = mosQuery
      ? item.mos.toLowerCase().includes(mosQuery)
      : true;
    return nameMatches && mosMatches;
  });

  res.json(filteredData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
