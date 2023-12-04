import axios from "axios";

export const CreateRecipe = async (data) => {
  const useData = await axios.post(
    "http://localhost:5000/api/v1/recipe/",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log(useData);
  return useData;
};



