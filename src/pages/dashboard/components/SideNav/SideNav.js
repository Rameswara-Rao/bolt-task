import React, { useContext, useState } from "react";
//Material UI Components
import {
  Typography,
  List,
  ListItem,
  ButtonGroup,
  Button,
  Autocomplete,
  TextField,
} from "@mui/material";
//Styles
import { buttonStyle } from "./SideNavStyle";
//Icons
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
// Other Imports
import { VehicleContext } from "../../../../context/vehicleDataContext";

const SideNav = () => {
  const { vehicleData, setVehicleDataHandle } = useContext(VehicleContext);

  //states
  const [searchVechicle, setSearchVechicle] = useState(true);
  const [localVehicle, setLocalVehicle] = useState([]);
  const uniqueIds = [];
  const uniqueVehicle = localVehicle.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.id);

    if (!isDuplicate) {
      uniqueIds.push(element.id);

      return true;
    }

    return false;
  });

  const setOpen = (id) => {
    const newList = localVehicle.filter((item) => item.id !== id);
    setLocalVehicle(newList);
  };

  const handleInputChange = (event, newValue) => {
    setSearchVechicle(true);
    setLocalVehicle([...localVehicle, newValue]);
  };


  return (
    <>
      <Typography my={2} variant="sideNavHead" align={"center"}>
        Vehicle Viewer
      </Typography>
      {searchVechicle ? (
        <List>
          <ListItem>
            <Button
              variant="contained"
              aria-label="outlined primary button group"
              startIcon={<AddIcon />}
              color="primary"
              sx={buttonStyle.buttonWidth}
              onClick={() => setSearchVechicle(false)}
            >
              Add Vehicle
            </Button>
          </ListItem>
        </List>
      ) : (
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={vehicleData}
          getOptionLabel={(option) => option.title}
          sx={buttonStyle.inputBox}
          renderInput={(params) => <TextField {...params} label="Search" />}
          onChange={handleInputChange}
        />
      )}

      <List>
        {uniqueVehicle.map((vehicle, index) => (
          <ListItem key={vehicle.id}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined button group"
              color="secondary"
              sx={buttonStyle.buttonWidth}
            >
              <Button
                sx={buttonStyle.secondaryWidth}
                onClick={() => setVehicleDataHandle(vehicle)}
              >
                {vehicle.title}
              </Button>

              <Button
                sx={buttonStyle.closeButton}
                onClick={() => setOpen(vehicle.id)}
              >
                <CancelIcon color="primary" />
              </Button>
            </ButtonGroup>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SideNav;
