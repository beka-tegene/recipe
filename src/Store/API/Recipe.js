import axios from "axios";

export const CreateRecipe = async (data) => {
  console.log(data);
  const useData = await axios.post(
    "https://recipe-2xma.onrender.com/api/v1/recipe/",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(useData);
  if (useData.status === 201) {
    window.location.reload(true);
  }
};

export const getAllRecipes = async (data) => {
  const response = await axios.get(`https://recipe-2xma.onrender.com/api/v1/recipe`);

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch recipes");
  }
};

export const getRecipeById = async (data) => {
  //
  const response = await axios.get(
    `https://recipe-2xma.onrender.com/api/v1/recipe/${data}`
  );

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch recipes by id");
  }
};

export const updateRecipeById = async (data) => {
  const productId = data.productId;
  const response = await axios.patch(
    `https://recipe-2xma.onrender.com/api/v1/recipe/${productId}`,
    data
  );

  if (response.status === 200) {
    window.location.reload(true);
  } else {
    throw new Error("Failed to fetch recipes by id");
  }
};

export const deleteRecipeById = async (data) => {
  const productId = data.productId;
  const response = await axios.delete(
    `https://recipe-2xma.onrender.com/api/v1/recipe/${productId}`
  );
  console.log(response);
  if (response.status === 200) {
    window.location.reload(true);
  } else {
    throw new Error("Failed to fetch recipes by id");
  }
};

export const likeProduct = async (data) => {
  console.log(data);
  const useData = await axios.post(
    `https://recipe-2xma.onrender.com/api/v1/recipe/like`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(useData);
  if (useData.status === 200) {
    window.location.reload(true);
  }
};
