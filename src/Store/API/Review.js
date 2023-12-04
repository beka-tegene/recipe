import axios from "axios";

export const createReview = async (data) => {
  const useData = await axios.post(
    "http://localhost:5000/api/v1/review",
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


export const getAllReviews = async (data) => {
  const useData = await axios.get(
    "http://localhost:5000/api/v1/review",
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




export const getSingleReview = async (data) => {
  //
  const response = await axios.get(
    `http://localhost:5000/api/v1/review/${data}`
  );

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch recipes by id");
  }
};

export const updateReview = async (data) => {
  //
  const response = await axios.patch(
    `http://localhost:5000/api/v1/review/${data}`
  );

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch recipes by id");
  }
};

export const deleteReview = async (data) => {
  //
  const response = await axios.delete(
    `http://localhost:5000/api/v1/review/${data}`
  );

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch recipes by id");
  }
};

