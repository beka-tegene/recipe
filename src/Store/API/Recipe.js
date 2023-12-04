import axios from "axios";

export const CreateRecipe = async (data) => {
  console.log(data);
  const useData = await axios.post(
    "http://localhost:5000/api/v1/recipe/createRecipe",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log(useData);
  if (useData.status === 200) {
    window.location.reload(true);
  }
};

export const getAllRecipes = async (data) => {
  //
  const response = await axios.get(`http://localhost:5000/api/v1/recipe`);

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch recipes");
  }
};

export const getRecipeById = async (data) => {
  //
  const response = await axios.get(
    `http://localhost:5000/api/v1/recipe/${data}`
  );

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch recipes by id");
  }
};

export const updateRecipeById = async (data) => {
  //
  const response = await axios.get(
    `http://localhost:5000/api/v1/recipe/${data}`
  );

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch recipes by id");
  }
};

export const deleteRecipeById = async (data) => {
  //
  const response = await axios.get(
    `http://localhost:5000/api/v1/recipe/${data}`
  );

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch recipes by id");
  }
};
