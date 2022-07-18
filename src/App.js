import axios from "axios";
import { useState, useEffect } from "react";
import { VehicleContext } from "./context/vehicleDataContext";
import Dashboard from "./pages/dashboard/Dashboard";



const App = () => {
  const [vehicleData, setVehicleData] = useState([]);
  const [vehicleDataHandle, setVehicleDataHandle] = useState();

  const vehicleDeatails = async () => {
    await axios
      .get("http://localhost:8000/vehicles")
      .then((res) => {
        setVehicleData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    vehicleDeatails();
  }, []);

  const dataState = {
    vehicleData,
    setVehicleData,
    vehicleDataHandle,
    setVehicleDataHandle,
  };

  return (
    <>
      <VehicleContext.Provider value={dataState}>
        <Dashboard />
      </VehicleContext.Provider>
    </>
  );
};

export default App;
