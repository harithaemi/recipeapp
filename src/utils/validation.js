
const validateRecipe = (req,res,next) =>{
    try{
    const {title ,ingredients,instructions,cookingTime,recipeBy} = req.body;
    if (!title){
        throw new Error ("title is required")
    }else if (!ingredients || ingredients.length < 2) {
    throw new Error("At least 2 ingredients are required")
    }else if (!cookingTime || cookingTime < 1) {
        throw new Error("cooking time should be atleast 1 min")
    }else if (!instructions ) {
        throw new Error("instructions are required")
    }else if (!recipeBy ) {
        throw new Error("auther of the recipe should be mentioned")
    }
    next();

    } catch (err) {
        res.status(400).send(err.message);
    }
    
};
module.exports= {validateRecipe}