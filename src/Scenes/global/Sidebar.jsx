import { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme, Select, MenuItem as MuiMenuItem, FormControl, Backdrop } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CloseIcon from "@mui/icons-material/Close";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[300],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({ isSidebar, setIsSidebar, userRole, setUserRole }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getAccessDescription = (role) => {
    switch (role) {
      case "Responsable Commercial":
        return "Accès complet à toutes les données";
      case "Lead Commercial":
        return "Accès par région et wilaya";
      case "Chef Commercial":
        return "Accès par station";
      default:
        return "Accès complet à toutes les données";
    }
  };

 //show side bar 
  const showBackdrop = isMobile && isSidebar;

  return (
    <>
      {/* Backdrop for mobile */}
      {showBackdrop && (
        <Backdrop
          open={showBackdrop}
          onClick={() => setIsSidebar(false)}
          sx={{
            zIndex: 999,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />
      )}

      {/* Sidebar */}
      <Box
        sx={{
          display: isMobile ? (isSidebar ? "block" : "none") : (isSidebar ? "block" : "none"),
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          zIndex: 1000,
          overflowY: "auto",
          overflowX: "hidden",
          transition: "all 0.3s ease",
          "& .pro-sidebar": {
            height: "100%",
            width: "270px",
          },
          "& .pro-sidebar-inner": {
            background: `${theme.palette.mode === "dark" ? colors.primary[400] : "#ffffff"} !important`,
            height: "100%",
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 25px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#e53e3e !important",
          },
          "& .pro-menu-item.active": {
            color: "#c53030 !important",
          },
          borderRight: `1px solid ${theme.palette.divider}`,
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: theme.palette.mode === "dark" ? colors.primary[400] : "#f5f5f5",
          },
          "&::-webkit-scrollbar-thumb": {
            background: colors.grey[600],
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: colors.grey[500],
          },
        }}
      >
        <ProSidebar>
          {/* COMPANY HEADER */}
          <Box mb="20px" p="20px">
            {/* Logo and Close Button */}
            <Box display="flex" alignItems="center" justifyContent="space-between" mb="15px">
              <img
                alt="company-logo"
                width="150px"
                height="40px"
                src={`../../assets/logo.svg`}
                style={{ cursor: "pointer" }}
              />
              {isMobile && (
                <IconButton onClick={() => setIsSidebar(false)} sx={{ color: colors.grey[300] }}>
                  <CloseIcon />
                </IconButton>
              )}
            </Box>

            {/* User Profile Section */}
            <Box>
              <Typography variant="body2" color={colors.grey[300]} mb="8px">
                Profil Utilisateur
              </Typography>
              <FormControl size="small" sx={{ width: '220px' }}>
                <Select
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                  sx={{
                    color: colors.grey[100],
                    height: '30px',
                    backgroundColor: theme.palette.mode === "dark" ? colors.primary[500] : "#f5f5f5",
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: colors.grey[400],
                    },
                    '& .MuiSvgIcon-root': {
                      color: colors.grey[100],
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: colors.grey[300],
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        backgroundColor: theme.palette.mode === "dark" ? colors.primary[400] : "#ffffff",
                        '& .MuiMenuItem-root': {
                          color: colors.grey[100],
                          '&:hover': {
                            backgroundColor: theme.palette.mode === "dark" ? colors.grey[700] : colors.grey[800],
                          },
                          '&.Mui-selected': {
                            backgroundColor: '#e53e3e',
                            color: '#ffffff',
                            '&:hover': {
                              backgroundColor: '#d73027'
                            }
                          }
                        }
                      }
                    }
                  }}
                >
                  <MuiMenuItem value="Responsable Commercial">Responsable Commercial</MuiMenuItem>
                  <MuiMenuItem value="Lead Commercial">Lead Commercial</MuiMenuItem>
                  <MuiMenuItem value="Chef Commercial">Chef Commercial</MuiMenuItem>
                </Select>
              </FormControl>
              <Typography variant="caption" color={colors.grey[400]} sx={{ mt: 1, display: 'block' }}>
                {getAccessDescription(userRole)}
              </Typography>
            </Box>
          </Box>


          <Menu iconShape="square">
            <Box paddingLeft="5%">
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "10px 0 5px 20px" }}
              >
                Navigation
              </Typography>

              <Item
                title="Dashboard General"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Page Clients"
                to="/Page-Clients"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Dashboard B2B"
                to="/dashboard-b2b"
                icon={<BusinessOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Dashboard B2C"
                to="/dashboard-b2c"
                icon={<ShoppingCartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Dashboard C2C"
                to="/dasboard-c2c"
                icon={<PersonAddOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Segmentation & Scoring"
                to="/Segmentation-&-Scoring"
                icon={<PsychologyOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Rapports et Exportation"
                to="/Rapports-et-Exportation"
                icon={<DescriptionOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Analyse Géographique"
                to="/Analyse Géographique"
                icon={<LocationOnOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </ProSidebar>
      </Box>
    </>
  );
};

export default Sidebar;