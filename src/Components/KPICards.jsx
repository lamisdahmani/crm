// src/Components/KPICard.jsx
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupIcon from "@mui/icons-material/Group";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const KPICard = ({ title, value, percentage, icon, color, isPositive = true }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Icon mapping
  const iconMap = {
    TrendingUp: TrendingUpIcon,
    Group: GroupIcon,
    LocalShipping: LocalShippingIcon,
    TrendingDown: TrendingDownIcon
  };

  const IconComponent = iconMap[icon] || TrendingUpIcon;

  return (
    <Box
      gridColumn="span 4"
      backgroundColor={colors.grey[900]}
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="20px"
      borderLeft={`4px solid ${colors[color][500]}`}
      borderRadius="12px"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
    >
      <Box>
        <Typography
          variant="h6"
          fontWeight="500"
          color={colors.grey[100]}
          mb="5px"
        >
          {title}
        </Typography>
        <Typography
          variant="h3"
          fontWeight="bold"
          color={colors.grey[100]}
          mb="5px"
        >
          {value}
        </Typography>
        <Box display="flex" alignItems="center">
          <IconComponent 
            sx={{ 
              color: colors[color][500], 
              mr: "5px",
              transform: !isPositive ? "rotate(180deg)" : "none"
            }} 
          />
          <Typography
            variant="body2"
            color={isPositive ? colors[color][500] : colors.redAccent[500]}
            fontWeight="500"
          >
            {percentage}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default KPICard;