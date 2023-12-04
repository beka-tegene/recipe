import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InputCreateRecipe: [],
  outputAllRecipe: [],
  InputLikeRecipe: [],
  InputDeleteRecipe: [],
  InputReviewRecipe: [],
  InputUpdateRecipe: [],
};

const RecipeHook = createSlice({
  name: "recipe",
  initialState: initialState,
  reducers: {
    setCreateRecipeData(state) {},
    setCreateRecipe(state, action) {
      const newData = action.payload;
      state.InputCreateRecipe.push({
        name: newData.name,
        ingredients: newData.ingredients,
        preparationSteps: newData.preparationSteps,
        categories: newData.categories,
        minutes: newData.minutes,
        cal: newData.cal,
      });
    },
    getAllRecipeData(state) {},
    getAllRecipe(state, action) {
      state.outputAllRecipe = action.payload;
    },
    setLikeRecipeData(state) {},
    setLikeRecipe(state, action) {
      const newData = action.payload;
      state.InputLikeRecipe.push({
        userId: newData.userId,
        productId: newData.productId,
      });
    },
    setDeleteRecipeData(state) {},
    setDeleteRecipe(state, action) {
      const newData = action.payload;
      state.InputDeleteRecipe.push({
        productId: newData.productId,
      });
    },
    setReviewRecipeData(state) {},
    setReviewRecipe(state, action) {
      const newData = action.payload;
      state.InputReviewRecipe.push({
        product: newData.product,
        rating: newData.rating,
      });
    },
    setUpdateRecipeData(state) {},
    setUpdateRecipe(state, action) {
      const newData = action.payload;
      state.InputUpdateRecipe.push({
        name: newData.name,
        ingredients: newData.ingredients,
        preparationSteps: newData.preparationSteps,
        categories: newData.categories,
        minutes: newData.minutes,
        cal: newData.cal,
      });
    },
  },
});

export const {
  setCreateRecipeData,
  setCreateRecipe,
  getAllRecipeData,
  getAllRecipe,
  setLikeRecipeData,
  setLikeRecipe,
  setDeleteRecipeData,
  setDeleteRecipe,
  setReviewRecipeData,
  setReviewRecipe,
  setUpdateRecipeData,
  setUpdateRecipe,
} = RecipeHook.actions;

export default RecipeHook.reducer;
