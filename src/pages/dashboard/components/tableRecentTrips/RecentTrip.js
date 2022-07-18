import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Typography,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Box,
} from "@mui/material";
//Styles
import { recentTripStyle } from "./RecentTripStyle";
//Context
import { VehicleContext } from "../../../../context/vehicleDataContext";

const RecentTrip = () => {
  const { vehicleDataHandle } = useContext(VehicleContext);

  const tableHead = [
    {
      id: uuidv4(),
      headName: "Start Time",
    },
    {
      id: uuidv4(),
      headName: "Duration",
    },
    {
      id: uuidv4(),
      headName: "Max Speed",
    },
    {
      id: uuidv4(),
      headName: "Average Speed",
    },
    {
      id: uuidv4(),
      headName: "Starting Voltage",
    },
    {
      id: uuidv4(),
      headName: "Ending Voltage",
    },
    {
      id: uuidv4(),
      headName: "Distance",
    },
    {
      id: uuidv4(),
      headName: "Driver Score",
    },
  ];

  return (
    <>
      <Box mb={2}>
        <Typography variant="fontHead">Recent Trips</Typography>
      </Box>
      <TableContainer
        component={Paper}
        sx={recentTripStyle.tableBorder}
        elevation="0"
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHead.map((e) => (
                <TableCell
                  key={e.id}
                  sx={recentTripStyle.tableHead}
                  align="left"
                >
                  {e.headName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicleDataHandle === undefined ? (
              <TableCell
                colSpan={8}
                align="center"
                sx={recentTripStyle.noDataStyle}
              >
                Please Select Vechicle
              </TableCell>
            ) : (
              vehicleDataHandle.recentTrips.slice(0, 6).map((tripStats) => (
                <TableRow
                  key={tripStats.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={recentTripStyle.tableCell}>
                    {tripStats.startTime}
                  </TableCell>
                  <TableCell sx={recentTripStyle.tableCell} align="left">
                    {tripStats.duration}
                  </TableCell>
                  <TableCell sx={recentTripStyle.tableCell} align="left">
                    {tripStats.maxSpeed}
                  </TableCell>
                  <TableCell sx={recentTripStyle.tableCell} align="left">
                    {tripStats.averageSpeed}
                  </TableCell>
                  <TableCell sx={recentTripStyle.tableCell} align="left">
                    {tripStats.startingVoltage}
                  </TableCell>
                  <TableCell sx={recentTripStyle.tableCell} align="left">
                    {tripStats.endingVoltage}
                  </TableCell>
                  <TableCell sx={recentTripStyle.tableCell} align="left">
                    {tripStats.distance}
                  </TableCell>
                  <TableCell sx={recentTripStyle.tableCell} align="left">
                    {tripStats.driverScore}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RecentTrip;
