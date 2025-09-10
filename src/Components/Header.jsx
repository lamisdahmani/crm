import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle, userRole = "Responsable Commercial" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Map role names to access text
  const getRoleAccessText = (role) => {
    switch (role) {
      case "Responsable Commercial":
        return "Toutes les données";
      case "Lead Commercial":
        return "Région/Wilaya";
      case "Chef Commercial":
        return "Station";
      default:
        return "Toutes les données";
    }
  };

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]} sx={{ mb: 1 }}>
        {subtitle}
      </Typography>
      
      {/* Access Level Display */}
      <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: colors.blueAccent[500],
            mr: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Typography 
            variant="caption" 
            sx={{ 
              color: "white", 
              fontSize: "8px",
              fontWeight: "bold",
              lineHeight: 1
            }}
          >
          </Typography>
        </Box>
        <Typography 
          variant="body2" 
          sx={{ 
            color: colors.blueAccent[500],
            fontWeight: "medium"
          }}
        >
          Accès: {getRoleAccessText(userRole)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;