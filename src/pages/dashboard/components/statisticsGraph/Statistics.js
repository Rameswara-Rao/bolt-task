import React, { useState, useContext, useEffect } from "react";
import { VehicleContext } from "../../../../context/vehicleDataContext";
import { v4 as uuidv4 } from "uuid";
//Material Ui
import { Box, Typography, Stack, Button } from "@mui/material";
//Graph - chart js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { statStyle } from "./StatisticsStyle";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Statistics = () => {
  const { vehicleDataHandle } = useContext(VehicleContext);
  const [active, setActive] = useState("Bookings");
  const [activeDay, setActiveDay] = useState("D");
  const [bookLabel, setBookLabel] = useState(
    vehicleDataHandle?.Statistics.Booking.day.labels
  );
  const [bookData, setBookData] = useState(
    vehicleDataHandle?.Statistics.Booking.day.data
  );
  console.log(bookLabel);

  useEffect(() => {
    handleStats(active);
  }, [vehicleDataHandle, active, activeDay]);

  const data = {
    labels: bookLabel,
    datasets: [
      {
        label: " ",
        data: bookData,
        borderColor: "#424242",
      },
    ],
  };

  const daysArr = [
    {
      id: uuidv4(),
      name: "D",
    },
    {
      id: uuidv4(),
      name: "W",
    },
    {
      id: uuidv4(),
      name: "M",
    },
    {
      id: uuidv4(),
      name: "Y",
    },
    {
      id: uuidv4(),
      name: "Max",
    },
  ];

  const statsBtn = [
    {
      id: uuidv4(),
      name: "Bookings",
    },
    {
      id: uuidv4(),
      name: "Earnings",
    },
  ];

  const handleStats = (e) => {
    setActive(e);
    if (e === "Bookings") {
      switch (activeDay) {
        case "D":
          setBookLabel(vehicleDataHandle?.Statistics.Booking.day.labels);
          setBookData(vehicleDataHandle?.Statistics.Booking.day.data);
          break;
        case "W":
          console.log(vehicleDataHandle?.Statistics.Booking.week.labels);

          setBookLabel(vehicleDataHandle?.Statistics.Booking.week.labels);
          setBookData(vehicleDataHandle?.Statistics.Booking.week.data);
          break;
        case "M":
          setBookLabel(vehicleDataHandle?.Statistics.Booking.month.labels);
          setBookData(vehicleDataHandle?.Statistics.Booking.month.data);

          break;
        case "Y":
          setBookLabel(vehicleDataHandle?.Statistics.Booking.year.labels);
          setBookData(vehicleDataHandle?.Statistics.Booking.year.data);

          break;
        case "Max":
          setBookLabel(vehicleDataHandle?.Statistics.Booking.max.labels);
          setBookData(vehicleDataHandle?.Statistics.Booking.max.data);
          break;
        default:
          break;
      }
    }
    if (e === "Earnings") {
      switch (activeDay) {
        case "D":
          setBookLabel(vehicleDataHandle?.Statistics.Earnings.day.labels);
          setBookData(vehicleDataHandle?.Statistics.Earnings.day.data);
          break;
        case "W":
          setBookLabel(vehicleDataHandle?.Statistics.Earnings.week.labels);
          setBookData(vehicleDataHandle?.Statistics.Earnings.week.data);
          break;
        case "M":
          setBookLabel(vehicleDataHandle?.Statistics.Earnings.month.labels);
          setBookData(vehicleDataHandle?.Statistics.Earnings.month.data);

          break;
        case "Y":
          setBookLabel(vehicleDataHandle?.Statistics.Earnings.year.labels);
          setBookData(vehicleDataHandle?.Statistics.Earnings.year.data);

          break;
        case "Max":
          setBookLabel(vehicleDataHandle?.Statistics.Earnings.max.labels);
          setBookData(vehicleDataHandle?.Statistics.Earnings.max.data);
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Box mb={2}>
          <Typography variant="fontHead" size="small" disableElevation>
            Statistics
          </Typography>
          {statsBtn.map((e) => (
            <Button
              variant="contained"
              size="small"
              color={active === e.name ? "primary" : "secondary"}
              onClick={() => {
                // setActive(e.name);
                handleStats(e.name);
              }}
              sx={{ ml: 2 }}
              disableElevation
            >
              {e.name}
            </Button>
          ))}
        </Box>
        <Box>
          {daysArr.map((e) => (
            <Button
              variant="contained"
              size="small"
              sx={{ minWidth: 40, mr: 1 }}
              color={activeDay === e.name ? "primary" : "secondary"}
              onClick={() => {
                setActiveDay(e.name);
              }}
              disableElevation
            >
              {e.name}
            </Button>
          ))}
        </Box>
      </Stack>

      {vehicleDataHandle === undefined ? (
        <Typography align="center" sx={statStyle.noDataStyle} >
          Please Select Vechicle
        </Typography>
      ) : (
        <Line
          type="line"
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
          height={125}
          data={data}
        />
      )}
    </>
  );
};

export default Statistics;
