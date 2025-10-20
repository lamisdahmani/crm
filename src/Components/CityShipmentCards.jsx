import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const CityShipmentCards = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Intensity level configuration
  const intensityConfig = {
    "Très élevée": {
      color: colors.redAccent[500],
      bgColor: `${colors.redAccent[500]}15`,
      dotColor: colors.redAccent[500],
    },
    "Élevée": {
      color: "#FF8C42",
      bgColor: "#FF8C4215",
      dotColor: "#FF8C42",
    },
    "Moyenne": {
      color: "#FFA726",
      bgColor: "#FFA72615",
      dotColor: "#FFA726",
    },
    "Faible": {
      color: "#26A69A",
      bgColor: "#26A69A15",
      dotColor: "#26A69A",
    },
    "Très faible": {
      color: "#5C6BC0",
      bgColor: "#5C6BC015",
      dotColor: "#5C6BC0",
    },
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(280px, 1fr))"
      gap="20px"
      width="100%"
    >
      {data.map((city, index) => {
        const config = intensityConfig[city.niveau];
      
        return (
          <Box
            key={index}
            backgroundColor={colors.grey[800]}
            borderRadius="12px"
            boxShadow="0px 2px 8px rgba(0, 0, 0, 0.1)"
            p="20px"
            position="relative"
            sx={{
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            {/* Status Dot */}
            <Box
              position="absolute"
              top="20px"
              right="20px"
              width="12px"
              height="12px"
              borderRadius="50%"
              backgroundColor={config.dotColor}
              sx={{
                boxShadow: `0 0 10px ${config.dotColor}`,
              }}
            />

            {/* City Name */}
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.grey[100]}
              mb="15px"
            >
              {city.name}
            </Typography>

            {/* Envois Count */}
            <Box mb="10px">
              <Typography
                variant="body2"
                color={colors.grey[300]}
                mb="5px"
              >
                Envois:
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.grey[100]}
              >
                {city.envois.toLocaleString()}
              </Typography>
            </Box>

            {/* Intensity */}
            <Box mb="10px">
              <Typography
                variant="body2"
                color={colors.grey[300]}
                mb="5px"
              >
                Intensité:
              </Typography>
              <Typography
                variant="h6"
                fontWeight="600"
                color={colors.grey[100]}
              >
                {city.intensite}%
              </Typography>
            </Box>

            {/* Level Badge */}
            <Box mb="15px">
              <Typography
                variant="body2"
                color={colors.grey[300]}
                mb="5px"
              >
                Niveau:
              </Typography>
              <Box
                display="inline-block"
                px="12px"
                py="4px"
                borderRadius="6px"
                backgroundColor={config.bgColor}
              >
                <Typography
                  variant="body2"
                  fontWeight="600"
                  color={config.color}
                >
                  {city.niveau}
                </Typography>
              </Box>
            </Box>

            {/* Progress Bar */}
            <Box
              width="100%"
              height="6px"
              backgroundColor={colors.grey[700]}
              borderRadius="3px"
              overflow="hidden"
            >
              <Box
                width={`${city.intensite}%`}
                height="100%"
                backgroundColor={config.color}
                borderRadius="3px"
                sx={{
                  transition: "width 0.8s ease-in-out",
                }}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default CityShipmentCards;