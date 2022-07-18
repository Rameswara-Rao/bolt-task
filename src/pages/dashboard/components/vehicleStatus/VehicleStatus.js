import React, { useContext } from "react";
import { Grid, Typography, CardContent, Card, Stack } from "@mui/material";
//Styles
import { vehicleCard } from "./VehicleStatusStyle";
//Icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
//other imports
import { v4 as uuidv4 } from "uuid";
//Context
import { VehicleContext } from "../../../../context/vehicleDataContext";

const VehicleStatus = () => {
  const { vehicleDataHandle } = useContext(VehicleContext);

  const createData = (id, name, data) => {
    return { id, name, data };
  };

  const vehicleNonParts = [
    createData(
      uuidv4(),
      "Elevation",
      vehicleDataHandle?.vehicleStaus.nonParts.elevation
    ),
    createData(
      uuidv4(),
      "Temperature",
      vehicleDataHandle?.vehicleStaus.nonParts.temperature
    ),
    createData(
      uuidv4(),
      "Locked",
      vehicleDataHandle?.vehicleStaus.nonParts.locked ? (
        <CheckCircleIcon color="primary" />
      ) : (
        <CancelIcon color="primary" />
      )
    ),
    createData(
      uuidv4(),
      "Battery",
      vehicleDataHandle?.vehicleStaus.nonParts.battery
    ),
  ];

  const vehicleCondition = [
    {
      id: uuidv4(),
      icon: vehicleDataHandle?.vehicleStaus.parts.throttle,
      element: "Throttle",
    },
    {
      id: uuidv4(),
      icon: vehicleDataHandle?.vehicleStaus.parts.controller,
      element: "Controller",
    },
    {
      id: uuidv4(),
      icon: vehicleDataHandle?.vehicleStaus.parts.motor,
      element: "Motor",
    },
    {
      id: uuidv4(),
      icon: vehicleDataHandle?.vehicleStaus.parts.overload,
      element: "Overload",
    },
    {
      id: uuidv4(),
      icon: vehicleDataHandle?.vehicleStaus.parts.overcurrent,
      element: "Overcurrent",
    },
  ];

  return (
    <>
      <Typography variant="fontHead">Vehicle Status</Typography>
      <Card elevation="0" sx={vehicleCard.cardBg}>
        <CardContent>
          <Grid container direction="row">
            {vehicleDataHandle === undefined ? (
              <Grid xs={12}>
                <Typography align="center" sx={vehicleCard.noDataStyle}>Please Select Vechicle</Typography>
              </Grid>
            ) : (
              <>
                <Grid xs={6}>
                  {vehicleNonParts.map((e) => (
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      sx={vehicleCard.nonPartsSpacing}
                    >
                      <Typography sx={vehicleCard.cardListFont}>
                        {e.name}
                      </Typography>
                      <Typography mr={2} sx={vehicleCard.cardListFontSecondary}>
                        {e.data}
                      </Typography>
                    </Stack>
                  ))}
                </Grid>
                <Grid xs={6}>
                  {vehicleCondition.map((e) => (
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      spacing={2}
                      ml={6}
                    >
                      {e.icon ? (
                        <CheckCircleIcon sx={vehicleCard.partsIconGood} />
                      ) : (
                        <CancelIcon sx={vehicleCard.partsIconError} />
                      )}
                      <Typography sx={vehicleCard.partsFont}>
                        {e.element}
                      </Typography>
                    </Stack>
                  ))}
                </Grid>
              </>
            )}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default VehicleStatus;
