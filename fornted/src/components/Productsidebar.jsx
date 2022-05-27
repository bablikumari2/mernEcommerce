import { Article, Group, Home, Storefront } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Stack,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setproducts } from "../redux/actions";

const ProductSidebar = () => {
  const dispatch = useDispatch();

  const handleSortedData = (query) => {
    axios
      .get(
        `https://ecommerce-masai.herokuapp.com/sortbycategory?sorttype=category&sortdirection=${query}`
      )
      .then(({ data }) => {
        dispatch(setproducts(data));
      });
  };
  const handleSorted = (order) => {
    axios
      .get(`https://mernbablicommerce.herokuapp.com/sort?sorttype=price&sortdirection=${order}`)
      .then(({ data }) => {
        dispatch(setproducts(data));
      });
  };
  const handleAllData = () => {
    axios.get(`https://mernbablicommerce.herokuapp.com/products`).then(({ data }) => {
      dispatch(setproducts(data));
    });
  };

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="All Products" onClick={handleAllData} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText
                primary="Men's wear"
                onClick={() => handleSortedData("men's clothing")}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText
                primary="Women's wear"
                onClick={() => handleSortedData("jewelery")}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText
                primary="Electronics"
                onClick={() => handleSortedData("electronics")}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Stack spacing={2} direction="column">
          <Button
            variant="text"
            sx={{ color: "black" }}
            onClick={() => handleSorted("asc")}
          >
            sort by price asc
          </Button>
          <Button
            variant="text"
            sx={{ color: "black" }}
            onClick={() => handleSorted("desc")}
          >
            sort by price desc
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductSidebar;
