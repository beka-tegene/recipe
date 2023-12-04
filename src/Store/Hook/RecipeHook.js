import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InputCreateRecipe: [],
};

const RecipeHook = createSlice({
  name: "auth",
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
  },
});

export const { setCreateRecipeData, setCreateRecipe } = RecipeHook.actions;

export default RecipeHook.reducer;
