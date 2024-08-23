require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3000;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

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
    name: "James Nilgen",
    job: "I.T",
    about:
      "James Nilgen is a U.S Army personnel with the 1st Infantry Division, Fort Riley, Kansas.",
    mos: "11B09435INF",
    imageUrl: "/images/james-nilgen.jpeg",
    details: {
      height: "5ft. 10in",
      age: 38,
      eyeColor: "blue",
      hairColor: "dirty blonde",
      rank: "Warrant Officer",
      dob: "10th April, 1986",
    },
  },
  {
    id: 2,
    name: "COL. Cory Moore",
    job: "I.T",
    about:
      "Cory Moore was born to Mr. & Mrs. Franklin Moore in 1970 in Detriot, Michigan. He schooled at the University of Detroit graduated with class of 1994.",

    mos: "11B-0934-INF",
    imageUrl: "/images/cory-moore.jpg",
    details: {
      height: "5ft. 7in",
      age: 48,
      eyeColor: "brown",
      hairColor: "black",
      rank: "Warrant Officer",
      dob: "1st November, 1976",
    },
  },
  {
    id: 3,
    name: "Timothy Anderson",
    job: "Infantry",
    about:
      "Timothy Anderson was born in Jacksonville, FL. in 1987. He has been an infantry man in the U.S Army since 2011",
    mos: "1N371-0934-MED",
    imageUrl: "/images/timothy-anderson.jpg",
    details: {
      height: "5ft. 7in",
      age: 28,
      eyeColor: "brown",
      hairColor: "black",
      rank: "Warrant Officer",
      dob: "10th June, 1996",
    },
  },
];

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, "client")));

// Serve search.html when accessing the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "search.html"));
});

// Handle search requests
app.get("/search", cors(corsOptions), (req, res) => {
  // const nameQuery = req.query.name ? req.query.name.toLowerCase() : null;
  const mosQuery = req.query.name ? req.query.name : null;

  if (!mosQuery) {
    return res.status(404).json({ message: "Nothing found" });
  }

  const filteredData = data.filter((item) => {
    // const nameMatches = nameQuery
    //   ? item.name.toLowerCase().includes(nameQuery)
    //   : true;
    const mosMatches = mosQuery ? item.mos.includes(mosQuery) : true;
    console.log("mosMatches", mosMatches);
    return mosMatches;
  });

  res.json(filteredData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
