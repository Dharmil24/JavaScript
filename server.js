const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/firstdb";
if (!process.env.MONGO_URI) {
    console.warn("No MONGO_URI found in .env. Falling back to local MongoDB at mongodb://127.0.0.1:27017/firstdb");
}

let dbConnected = false;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
})
.then(() => {
    console.log("✓ MongoDB Connected");
    dbConnected = true;
})
.catch((err) => {
    console.error("✗ MongoDB connection error:", err.message);
});

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    address: String,
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", contactSchema, "firstcollection");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "form.html"));
});

app.post("/api/contact", async (req, res) => {
    try {
        console.log("📝 Form submission received:", JSON.stringify(req.body));
        
        if (!dbConnected) {
            return res.status(503).json({
                success: false,
                message: "Database not connected"
            });
        }

        const newData = new Contact(req.body);
        const result = await newData.save();
        
        console.log("✓ Data saved to MongoDB:", result._id);
        
        res.status(201).json({
            success: true,
            message: "Data Saved",
            id: result._id
        });
    } catch (error) {
        console.error("✗ Error saving data:", error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`✓ Server running on http://localhost:${PORT}`);
});