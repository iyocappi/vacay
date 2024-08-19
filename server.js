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

// app.use(express.static('../client/dist'))
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

// Sample data
const data = [
  { id: 1, name: "John Doe", job: "Developer" },
  { id: 2, name: "Jane Smith", job: "Designer" },
  { id: 3, name: "Mike Johnson", job: "Manager" },
];

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, "client")));

// Serve search.html when accessing the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "search.html"));
});

// Handle search requests
app.get("/search", cors(corsOptions), (req, res) => {
  const query = req.query.name ? req.query.name.toLowerCase() : "";
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query)
  );
  res.json(filteredData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
