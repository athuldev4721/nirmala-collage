const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from the current directory if not using "public/"
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html")); // Adjust path if needed
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
