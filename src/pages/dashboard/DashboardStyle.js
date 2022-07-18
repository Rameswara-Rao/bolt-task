export const navbarStyles = {
  drawerXl: {
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: 220,
      backgroundColor: "#F5F5F5",
    },
  },
  drawerSm: {
    display: { xs: "block", sm: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: 220,
      backgroundColor: "#F5F5F5",
    },
  },
  appBar: {
    display: { sm: "none" },
  },
  mobResponsive: {
    flexGrow: 1,
    p: 3,
    width: { sm: `calc(100% - 200px)` },
  },
  breadcrumbsStyle:{
    fontFamily:"Inter",
    fontSize: "18px",
    color:"#616161"
  },
  breadcrumbsStyleActive:{
    fontFamily:"Inter",
    fontSize: "18px",
    color:"#000000"
  }
};
