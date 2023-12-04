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
