import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme, Select, MenuItem as MuiMenuItem, FormControl } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

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

const Sidebar = ({ isSidebar, userRole, setUserRole }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");

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

  return (
    <Box
      sx={{
        display: isSidebar ? "block" : "none",
        "& .pro-sidebar-inner": {
          background: "{colors.primary[400]}",
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
      }}
    >
      <ProSidebar>
        {/* COMPANY HEADER */}
        <Box mb="2àpx" p="20px">
          {/* Logo and Company Name */}
          <Box display="flex" alignItems="center" mb="15px">
            <img
              alt="company-logo"
              width="150px"
              height="40px"
              src={`../../assets/logo.svg`}
              style={{ cursor: "pointer" }}
            />
          </Box>

          {/* User Profile Section */}
          <Box>
            <Typography variant="body2" color={colors.grey[300]} mb="px">
              Profil Utilisateur
            </Typography>
            <FormControl size="small" sx={{ width: '220px' }}>
              <Select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)} // Now uses prop function
                sx={{
                  color: colors.grey[300],
                  height: '30px',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#adb5bd',
                  },
                  '& .MuiSvgIcon-root': {
                    color: colors.grey[100],
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: colors.primary[400],       // Dropdown background
                      '& .MuiMenuItem-root': {
                        color: colors.grey[100],               // Menu item text color
                        '&:hover': {
                          backgroundColor: colors.grey[700],    // Hover background
                        },
                        '&.Mui-selected': {
                          backgroundColor: '#e53e3e',    // Selected item background
                          color: '#ffffff',              // Selected item text color
                          '&:hover': {
                            backgroundColor: '#d73027'   // Selected item hover
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

        {/* SEARCH BAR */}
        <Box
          display="flex"
          border={`1px solid $colors.grey[700]`}
          borderRadius="3px"
          mx="20px"
          mb="px"
        >
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
          <InputBase 
            sx={{ 
              ml: 1, 
              flex: 1,
              '& .MuiInputBase-input::placeholder': {
                color: colors.grey[400],
                opacity: 1
              }
            }} 
            placeholder="Search" 
          />
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
              to="/Dashboard B2B"
              icon={<BusinessOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Dashboard B2C"
              to="/Dashboard B2C"
              icon={<ShoppingCartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Dashboard C2C"
              to="/Dashboard C2C"
              icon={<PersonAddOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Segmentation & Scoring"
              to="/Segmentation & Scoring"
              icon={<PsychologyOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Rapports et Exportation"
              to="/Rapports et Exportation"
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
  );
};

export default Sidebar;