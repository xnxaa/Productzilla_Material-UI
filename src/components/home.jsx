import React, { useState } from "react";
import {
  TextField,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Checkbox,
  FormControl,
  ListItemText,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

import { carsData } from "./database";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCars = carsData.filter((car) => {
    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(car.merek);
    const typeMatch =
      selectedTypes.length === 0 || selectedTypes.includes(car.tipe);
    const colorMatch =
      selectedColors.length === 0 || selectedColors.includes(car.warna);

    return (
      brandMatch &&
      typeMatch &&
      colorMatch &&
      car.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleBrandChange = (event) => {
    setSelectedBrands(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedTypes(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColors(event.target.value);
  };

  return (
    <div>
      <Card
        sx={{
          marginTop: 25,
          marginBottom: 2,
          padding: 3,
          marginLeft: 2,
          marginRight: 2,
          boxShadow: "0px 4px 18px rgba(75, 70, 92, 0.1)",
          borderRadius: 3,
        }}
      >
        <Grid container alignItems="center">
          <Grid item xs={12} md={12}>
            <Typography variant="h6" color={"#0599DE"}>
              <b>Cari Mobil Impian Anda</b>
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="standard-bare"
              defaultValue="Bare"
              margin="normal"
              sx={{
                width: "100%",
                boxShadow: "0px 2px 4px rgba(165, 163, 174, 0.3)",
                borderRadius: 3,
              }}
              variant="outlined"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl sx={{ minWidth: 230 }}>
              <InputLabel id="brand-label">Merk</InputLabel>
              <Select
                labelId="brand-label"
                multiple
                value={selectedBrands}
                onChange={handleBrandChange}
                renderValue={(selected) => selected.join(", ")}
              >
                {Array.from(new Set(carsData.map((car) => car.merek))).map((brand) => (
                  <MenuItem key={brand} value={brand}>
                    <Checkbox checked={selectedBrands.includes(brand)} />
                    <ListItemText primary={brand} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl sx={{ minWidth: 230 }}>
              <InputLabel id="type-label">Tipe</InputLabel>
              <Select
                labelId="type-label"
                multiple
                value={selectedTypes}
                onChange={handleTypeChange}
                renderValue={(selected) => selected.join(", ")}
              >
                {Array.from(new Set(carsData.map((car) => car.tipe))).map((type) => (
                  <MenuItem key={type} value={type}>
                    <Checkbox checked={selectedTypes.includes(type)} />
                    <ListItemText primary={type} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl sx={{ minWidth: 230 }}>
              <InputLabel id="color-label">Warna</InputLabel>
              <Select
                labelId="color-label"
                multiple
                value={selectedColors}
                onChange={handleColorChange}
                renderValue={(selected) => selected.join(", ")}
              >
                {Array.from(new Set(carsData.map((car) => car.warna))).map((color) => (
                  <MenuItem key={color} value={color}>
                    <Checkbox checked={selectedColors.includes(color)} />
                    <ListItemText primary={color} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Card>
      <Grid container justifyContent="center" spacing={2}>
  {filteredCars.map((car) => (
    <Grid item key={car.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                marginLeft: 2,
                marginRight: 4,
                width: 345,
                height: 399,
                background: "#FFFFFF",
                boxShadow: "0px 4px 18px rgba(75, 70, 92, 0.1)",
                borderRadius: 2,
              }}
            >
              <CardMedia component="img" src={require(`../images/${car.path}`)} alt={car.nama} sx={{height: '201px'}} />
              <CardContent>
                <Typography variant="h6"><b>{car.nama}</b></Typography>
                <Typography>
                  <b>Merek: </b>
                  {car.merek}
                </Typography>
                <Typography>
                  <b>Warna: </b>
                  {car.warna}
                </Typography>
                <Typography>
                  <b>Tipe: </b>
                  {car.tipe}
                </Typography>
                <Button variant="contained">LIHAT DETAIL</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;