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
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";

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
  const [ingredientsList, setIngredientsList] = useState([]);

  const handleDelete = (index) => {
    const updatedList = [...ingredientsList];
    updatedList.splice(index, 1);
    setIngredientsList(updatedList);
  };

  const handleAddIngredient = () => {
    if (ingredient.trim() !== "") {
      setIngredientsList([...ingredientsList, ingredient]);
      setIngredient("");
    }
  };

  return (
    <Box sx={style}>
      <Typography color={"#FFFFFF"} fontSize={28}>
        Create Recipe
      </Typography>
      <Paper
        component={"form"}
        elevation={0}
        sx={{
          gap: 2,
          width: "90%",
          background: "transparent",
          color: "#FFFFFF",
        }}
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
            {ingredientsList.map((item, index) => (
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
