import axios from "axios";
import { useState, useEffect } from "react";
import { VehicleContext } from "./context/vehicleDataContext";
import Dashboard from "./pages/dashboard/Dashboard";



const App = () => {
  const [vehicleData, setVehicleData] = useState([]);
  const [vehicleDataHandle, setVehicleDataHandle] = useState();

  const vehicleDetails = async () => {
    await axios
      .get("https://rameswara-rao.github.io/db/db.json")
      .then((res) => {
        console.log(res);

        setVehicleData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    vehicleDetails();
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
