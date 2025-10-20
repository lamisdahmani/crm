import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import BusinessIcon from "@mui/icons-material/Business";

const TopEntreprise = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      backgroundColor={colors.grey[900]}
      borderRadius="12px"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      p="25px"
    >
      {/* Header avec icône */}
      <Box display="flex" alignItems="center" mb="25px">
        <BusinessIcon 
          sx={{ 
            color: colors.redAccent[500], 
            fontSize: "28px",
            mr: 2
          }} 
        />
        <Typography
          variant="h4"
          fontWeight="bold"
          color={colors.grey[100]}
        >
          Top Entreprises par Valeur
        </Typography>
      </Box>

      {/* Liste des entreprises */}
      <Box display="flex" flexDirection="column" gap="20px">
        {data.map((entreprise) => (
          <Box
            key={entreprise.id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="20px"
            backgroundColor={colors.primary[400]}
            borderRadius="8px"
            sx={{
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: colors.primary[500],
                transform: "translateX(5px)"
              }
            }}
          >
            {/* Partie gauche: Nom et rang */}
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
                mb="5px"
              >
                {entreprise.name}
              </Typography>
              <Typography
                variant="body2"
                color={colors.grey[400]}
              >
                Rang #{entreprise.rank}
              </Typography>
            </Box>

            {/* Partie droite: Valeur et mois */}
            <Box textAlign="right">
              <Typography
                variant="h4"
                fontWeight="bold"
                color={colors.greenAccent[400]}
                mb="5px"
              >
                {entreprise.value}
              </Typography>
              <Typography
                variant="body2"
                color={colors.grey[400]}
              >
                {entreprise.month}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TopEntreprise;