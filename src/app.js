require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const recipeRoutes = require("./routes/recipeRoutes");

app.use(express.json())
app.use("/recipes" , recipeRoutes);


connectDB();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});