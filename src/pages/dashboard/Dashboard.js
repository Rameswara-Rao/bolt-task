import React,{useContext} from "react";
import {
  Toolbar,
  Link,
  Breadcrumbs,
  Typography,
  IconButton,
  Drawer,
  CssBaseline,
  Box,
  AppBar,
  Grid,
} from "@mui/material";
// Icons
import MenuIcon from "@mui/icons-material/Menu";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
//components imports
import VehicleStatus from "./components/vehicleStatus/VehicleStatus";
import SideNav from "./components/SideNav/SideNav";
import Statistics from "./components/statisticsGraph/Statistics";
import RecentTrip from "./components/tableRecentTrips/RecentTrip";
//Styles
import { navbarStyles } from "./DashboardStyle";
//Context
import { VehicleContext } from "../../context/vehicleDataContext";

const drawerWidth = 240;

const Dashboard = () => {
  const {vehicleDataHandle} = useContext(VehicleContext);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <AppBar variant="outline" color="transparent" sx={navbarStyles.appBar}>
          <Toolbar>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={navbarStyles.drawerSm}
        >
          <SideNav />
        </Drawer>
        <Drawer variant="permanent" sx={navbarStyles.drawerXl} open>
          <SideNav />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={navbarStyles.mobResponsive}
      >
        <Toolbar />
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          mb={4}
        >
          <Typography sx={navbarStyles.breadcrumbsStyle} key="3">Vehicles</Typography>,
          <Link sx={navbarStyles.breadcrumbsStyleActive} underline="hover" key="1" color="inherit" >
            {vehicleDataHandle?.title}
          </Link>
          ,
        </Breadcrumbs>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={5}>
            <VehicleStatus />
          </Grid>
          <Grid item xs={12} lg={7}>
            <Typography paragraph>
              <Statistics />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <RecentTrip />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
