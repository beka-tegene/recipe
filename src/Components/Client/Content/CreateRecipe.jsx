import React, { useState } from "react";
import {
  Box,
  Button,
  Chip,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { Add } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setCreateRecipe } from "../../../Store/Hook/RecipeHook";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  background: "#555555",
  border: "2px solid #99CB00",
  boxShadow: 24,
  p: 2,
  borderRadius: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const CreateRecipe = () => {
  const [ingredient, setIngredient] = useState("");
  const [name, setName] = useState();
  const [ingredients, setIngredientsList] = useState([]);
  const [preparationSteps, setPreparationSteps] = useState();
  const [categories, setCategories] = useState();
  const [minutes, setMinutes] = useState();
  const [cal, setCal] = useState();
  const [image, setImage] = useState();

  const handleDelete = (index) => {
    const updatedList = [...ingredients];
    updatedList.splice(index, 1);
    setIngredientsList(updatedList);
  };

  const handleAddIngredient = () => {
    if (ingredient.trim() !== "") {
      setIngredientsList([...ingredients, ingredient]);
      setIngredient("");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };
  const dispatch = useDispatch();
  const token = Cookies.get("token");
  const decodedToken = jwt_decode(token);
  const user = decodedToken.userId;
  const submitHandler = async (e) => {
    e.preventDefault();

    await dispatch(
      setCreateRecipe({
        data: {
          name,
          ingredients,
          preparationSteps,
          categories,
          minutes,
          cal,
          image,
          user,
        },
      })
    );
  };
  return (
    <Box sx={style}>
      <Typography color={"#FFFFFF"} fontSize={28}>
        Create Recipe
      </Typography>
      <ToastContainer />
      <Paper
        component={"form"}
        elevation={0}
        sx={{
          gap: 2,
          width: "90%",
          background: "transparent",
          color: "#FFFFFF",
        }}
        onSubmit={submitHandler}
      >
        <Stack gap={2} flexGrow={1}>
          <InputBase
            sx={{
              flex: 1,
              border: "1px solid #FFFFFF",
              color: "#FFFFFF90",
              px: 2,
              py: 1,
              borderRadius: 2,
            }}
            placeholder="Name Of Food"
            inputProps={{ "aria-label": "Name Of Food" }}
            onChange={(e) => setName(e.target.value)}
          />
          <FormControl
            fullWidth
            size="medium"
            sx={{ borderColor: "#FFFFFF" }}
            style={{ borderColor: "#FFFFFF" }}
          >
            <InputLabel
              id="demo-select-small-label"
              sx={{ color: "#FFFFFF90" }}
            >
              Category
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Category"
              onChange={(e) => setCategories(e.target.value)}
            >
              <MenuItem value={"Appetizers"}>Appetizers</MenuItem>
              <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
              <MenuItem value={"Lunch"}>Lunch</MenuItem>
              <MenuItem value={"Dinner"}>Dinner</MenuItem>
              <MenuItem value={"Desserts"}>Desserts</MenuItem>
              <MenuItem value={"Juice"}>Juice</MenuItem>
              <MenuItem value={"Salads"}>Salads</MenuItem>
              <MenuItem value={"Soups"}>Soups</MenuItem>
              <MenuItem value={"Vegan"}>Vegan</MenuItem>
            </Select>
          </FormControl>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={2}
            justifyContent={"flex-start"}
          >
            <InputBase
              sx={{
                flex: 1,
                border: "1px solid #FFFFFF",
                color: "#FFFFFF90",
                px: 2,
                py: 1,
                borderRadius: 2,
              }}
              placeholder="Ingredient"
              inputProps={{ "aria-label": "Ingredient" }}
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
            />
            <IconButton
              onClick={handleAddIngredient}
              sx={{
                background: "#99CB00",
                "&:hover": { background: "#99CB0090" },
              }}
            >
              <Add />
            </IconButton>
          </Stack>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {ingredients?.map((item, index) => (
              <Chip
                key={index}
                label={item}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </Stack>
          <InputBase
            sx={{
              flex: 1,
              border: "1px solid #FFFFFF",
              color: "#FFFFFF90",
              px: 2,
              py: 1,
              borderRadius: 2,
            }}
            type="number"
            placeholder="Minute"
            inputProps={{ "aria-label": "Minute" }}
            onChange={(e) => setMinutes(e.target.value)}
          />
          <InputBase
            sx={{
              flex: 1,
              border: "1px solid #FFFFFF",
              color: "#FFFFFF90",
              px: 2,
              py: 1,
              borderRadius: 2,
            }}
            placeholder="Cal"
            inputProps={{ "aria-label": "Cal" }}
            onChange={(e) => setCal(e.target.value)}
          />
          <TextField
            label="Preparation Steps"
            fullWidth
            multiline
            rows={1}
            variant="outlined"
            onChange={(e) => setPreparationSteps(e.target.value)}
            mb={2}
          />
          <InputBase
            sx={{
              flex: 1,
              border: "1px solid #FFFFFF",
              color: "#FFFFFF90",
              px: 2,
              py: 1,
              borderRadius: 2,
            }}
            type="file"
            placeholder="Image"
            inputProps={{ "aria-label": "Image" }}
            onChange={handleImageChange}
          />

          <Stack direction={"row"} gap={2}>
            <Button
              type="reset"
              variant="contained"
              sx={{
                background: "transparent",
                border: "1px solid #99CB00",
                "&:hover": { background: "transparent" },
                width: "50%",
                color: "#99CB00",
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                background: "#99CB00",
                "&:hover": { background: "#99CB0090" },
                width: "50%",
              }}
            >
              Create
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default CreateRecipe;
