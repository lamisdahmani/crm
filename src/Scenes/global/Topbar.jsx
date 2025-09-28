import { Box, IconButton, useTheme, Typography, Menu, MenuItem, Divider, ListItemIcon, ListItemText, Popover, Grid, Button} from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Topbar = ({ setIsSidebar }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [calendarAnchorEl, setCalendarAnchorEl] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const open = Boolean(anchorEl);
  const calendarOpen = Boolean(calendarAnchorEl);

  const handleSidebarToggle = () => {
    console.log("Toggle clicked!");
    setIsSidebar((prev) => {
      console.log("Previous state:", prev, "New state:", !prev);
      return !prev;
    });
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuClick = (action) => {
    console.log(`${action} clicked`);
    handleProfileClose();
  };

  // Calendar handlers
  const handleCalendarClick = (event) => {
    setCalendarAnchorEl(event.currentTarget);
  };

  const handleCalendarClose = () => {
    setCalendarAnchorEl(null);
  };

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handlePreviousYear = () => {
    setCurrentDate(new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), 1));
  };

  const handleNextYear = () => {
    setCurrentDate(new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), 1));
  };

  // Calendar component
  const Calendar = () => {
    const today = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const monthNames = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];
    
    const dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; 
    
    const renderCalendarDays = () => {
      const days = [];
      
      // Empty cells for days before the first day of the month
      for (let i = 0; i < adjustedFirstDay; i++) {
        days.push(
          <Box
            key={`empty-${i}`}
            sx={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          />
        );
      }
      
      // Days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const isToday = 
          today.getDate() === day &&
          today.getMonth() === month &&
          today.getFullYear() === year;
        
        days.push(
          <Box
            key={day}
            sx={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              cursor: "pointer",
              backgroundColor: isToday ? theme.palette.primary.main : "transparent",
              color: isToday ? "white" : theme.palette.text.primary,
              "&:hover": {
                backgroundColor: isToday ? theme.palette.primary.dark : theme.palette.action.hover
              }
            }}
          >
            <Typography variant="body2">{day}</Typography>
          </Box>
        );
      }
      
      return days;
    };

    return (
      <Box sx={{ p: 2, minWidth: 320 }}>
        {/* Calendar Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box display="flex" alignItems="center">
            <IconButton size="small" onClick={handlePreviousYear}>
              <ChevronLeftIcon />
            </IconButton>
            <Typography variant="h6" sx={{ mx: 1, minWidth: 60, textAlign: "center" }}>
              {year}
            </Typography>
            <IconButton size="small" onClick={handleNextYear}>
              <ChevronRightIcon />
            </IconButton>
          </Box>
          
          <Box display="flex" alignItems="center">
            <IconButton size="small" onClick={handlePreviousMonth}>
              <ChevronLeftIcon />
            </IconButton>
           <Typography variant="h6" sx={{ mx: 1, minWidth: 60, textAlign: "center" }}>
              {monthNames[month]}
            </Typography>
            <IconButton size="small" onClick={handleNextMonth}>
              <ChevronRightIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Days of week header */}
        <Grid container spacing={0} mb={1}>
          {dayNames.map((dayName) => (
            <Grid item key={dayName} xs={12/7}>
              <Box 
                sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  height: 40
                }}
              >
                <Typography 
                  variant="caption" 
                  sx={{ 
                    fontWeight: "bold", 
                    color: theme.palette.text.secondary 
                  }}
                >
                  {dayName}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Calendar Grid */}
        <Box 
          sx={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(7, 1fr)", 
            gap: 0.5 
          }}
        >
          {renderCalendarDays()}
        </Box>

        {/* Today button */}
        <Box mt={2} display="flex" justifyContent="center">
          <Button 
            size="small" 
            onClick={() => setCurrentDate(new Date())}
            variant="outlined"
          >
            Aujourd'hui
          </Button>
        </Box>
      </Box>
    );
  };

  return ( 
    <Box  
      display="flex" 
      justifyContent="space-between" 
      alignItems="center" 
      p={2}
      sx={{
        borderBottom: `1px solid ${theme.palette.divider}`
      }}
    >
      {/* LEFT SIDE - Sidebar toggle and Dashboard */}
      <Box display="flex" alignItems="center">
        <IconButton onClick={handleSidebarToggle} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Box display="flex" alignItems="center">
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", lineHeight: 1, color: theme.palette.mode === "dark" ? "#ffffff" : "#000000" }}>
              Dashboard
            </Typography>
            <Typography variant="caption" sx={{  color: theme.palette.mode === "dark" ? "#dee2e6" : "#2d3748", lineHeight: 1 }}>
              Plateforme d'analyse client Yalidine
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* RIGHT SIDE - Icons and User */}
      <Box display="flex" alignItems="center">
        {/* Calendar */}
        <IconButton onClick={handleCalendarClick}>
          <CalendarTodayOutlinedIcon />
        </IconButton>
        
        {/* Calendar Popover */}
        <Popover
          open={calendarOpen}
          anchorEl={calendarAnchorEl}
          onClose={handleCalendarClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          PaperProps={{
            elevation: 3,
            sx: {
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
            }
          }}
        >
          <Calendar />
        </Popover>
        
        {/* Other icons */}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        
        {/* User section with dropdown */}
        <Box display="flex" alignItems="center" ml={2}>
          <Box 
            display="flex" 
            alignItems="center" 
            onClick={handleProfileClick}
            sx={{ 
              cursor: "pointer",
              borderRadius: 1,
              padding: "4px 8px",
              "&:hover": {
                backgroundColor: theme.palette.action.hover
              }
            }}
          >
            {/* Profile Picture */}
            <Box 
              sx={{ 
                width: 32, 
                height: 32, 
                borderRadius: "50%",
                backgroundImage: "url('/path/to/your/profile-image.jpg')", 
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: theme.palette.primary.main,
                mr: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "14px",
                fontWeight: "bold"
              }}
            >
              RC
            </Box>
            
            {/* User Info */}
            <Box sx={{ mr: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold", lineHeight: 1 , color: theme.palette.mode === "dark" ? "#ffffff" : "#000000" }}>
                Responsable Commercial
              </Typography>
              <Typography variant="caption" sx={{  color: theme.palette.mode === "dark" ? "#dee2e6" : "#2d3748", lineHeight: 1 }}>
                admin@yalidine.com
              </Typography>
            </Box>
            
            {/* Dropdown Arrow */}
            <KeyboardArrowDownIcon 
              sx={{ 
                fontSize: 16, 
                color: "text.secondary",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s"
              }} 
            />
          </Box>
        </Box>

        {/* Profile Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleProfileClose}
          onClick={handleProfileClose}
          PaperProps={{
            elevation: 3,
            sx: {
              backgroundColor: '#ffffff',
              '& .MuiMenuItem-root': {
                color: '#333333',
                '&:hover': {
                  backgroundColor: '#f0f0f0'
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
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={() => handleProfileMenuClick('profile')}>
            <ListItemIcon>
              <PersonOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Profil" />
          </MenuItem>
          
          <MenuItem onClick={() => handleProfileMenuClick('settings')}>
            <ListItemIcon>
              <SettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Paramètres" />
          </MenuItem>
          
          <Divider />
          
          <MenuItem 
            onClick={() => handleProfileMenuClick('logout')}
            sx={{ color: 'error.main' }}
          >
            <ListItemIcon>
              <LogoutOutlinedIcon fontSize="small" sx={{ color: 'error.main' }} />
            </ListItemIcon>
            <ListItemText primary="Déconnexion" />
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;