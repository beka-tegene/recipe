import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InputCreateRecipe: [],
  outputAllRecipe: [],
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
    getAllRecipeData(state) {
      state.outputAllRecipe = [];
    },
    getAllRecipe(state, action) {
      state.outputAllRecipe = action.payload;
    },
  },
});

export const {
  setCreateRecipeData,
  setCreateRecipe,
  getAllRecipeData,
  getAllRecipe,
} = RecipeHook.actions;

export default RecipeHook.reducer;
