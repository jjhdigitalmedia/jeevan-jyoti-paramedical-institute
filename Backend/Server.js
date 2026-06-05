const express = require("express");
const cors = require ("cors");
const { ssrExportNameKey } = require("vite/module-runner");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Backend Running");
});

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on Port ${PORT}`);
});