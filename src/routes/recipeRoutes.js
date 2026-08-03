const express = require("express");
const{validateRecipe} =require("../utils/validation")
    const reciperouter = express.Router();
const {createRecipes , getAllRecipes , updateRecipe, deleteRecipe , getRecipeById} = require("../controllers/recipeController")

    reciperouter.post("/",validateRecipe ,createRecipes);
       reciperouter.get("/" ,getAllRecipes);
       reciperouter.get("/:id" ,getRecipeById);
         reciperouter.patch("/:id",updateRecipe);
          reciperouter.delete("/:id",deleteRecipe);


                module.exports =reciperouter;