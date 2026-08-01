const express = require("express");
const{validateRecipe} =require("../utils/validation")
    const reciperouter = express.Router();
const {createRecipes , getAllRecipes , updateRecipe, deleteRecipe} = require("../controllers/recipeController")

    reciperouter.post("/",validateRecipe ,createRecipes);
       reciperouter.get("/" ,getAllRecipes);
         reciperouter.patch("/:id",updateRecipe);
          reciperouter.delete("/:id",deleteRecipe);


                module.exports =reciperouter;