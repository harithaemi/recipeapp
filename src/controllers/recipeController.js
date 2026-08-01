const Recipe =require("../models/Recipe");

const createRecipes = async(req,res)=>{
try{
    const recipe = new Recipe (req.body);
    await recipe.save();
    res.send("recipe added");
}catch(err){
    res.status(400).send("Error saving the recipes:" + err.message)
}
};

const getAllRecipes = async (req,res)=>{
    try{
        const recipes = await Recipe.find({});
res.send(recipes);
    }catch(err){
        res.status(400).send("something went wrong")
    }
}
const updateRecipe = async (req,res)=>{
   
        const recipeId = req.params.id;
        const data =req.body;
         try{ 
            await Recipe.findByIdAndUpdate({_id:recipeId},data)
res.send("recipes updated successfully");
    }catch(err){
        res.status(400).send("something went wrong")
    }
}
 
const deleteRecipe = async(req,res)=>{
    const recipeId = req.params.id;
    try{
        const recipe = await Recipe.findByIdAndDelete({_id:recipeId});
        res.send("recipe deleted successfully")
    }catch(err){
        res.status(400).send("something went wrong")
    }
}

module.exports ={ createRecipes ,getAllRecipes ,updateRecipe,deleteRecipe}