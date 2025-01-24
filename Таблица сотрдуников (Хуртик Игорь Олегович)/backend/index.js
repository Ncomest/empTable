const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const employee = require("./employee.data");
const cors = require("cors");

app.use(express.json());
app.use(cors("http://localhost:3000"));

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
});

app.get("/employee", (req, res) => {
  try {
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
});

app.listen(PORT, () => console.log(`Server start on port: ${PORT}`));
