import { Box, Typography, useTheme, Chip } from "@mui/material";
import { tokens } from "../theme";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ClientFideles = ({ data }) => {
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
        <FavoriteIcon
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
          Clients Fidèles
        </Typography>
      </Box>

      {/* Liste des clients */}
      <Box display="flex" flexDirection="column" gap="20px">
        {data.map((client) => (
          <Box
            key={client.id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="20px"
            backgroundColor={colors.greenAccent[900]}
            borderRadius="8px"
            sx={{
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: colors.greenAccent[800],
                transform: "translateX(5px)"
              }
            }}
          >
            {/* Partie gauche: Nom et nombre de commandes */}
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
                mb="5px"
              >
                {client.name}
              </Typography>
              <Typography
                variant="body2"
                color={colors.grey[400]}
              >
                {client.commandes} commandes
              </Typography>
            </Box>

            {/* Partie droite: Montant et statut fidèle */}
            <Box textAlign="right" display="flex" flexDirection="column" alignItems="flex-end" gap="8px">
              <Typography
                variant="h4"
                fontWeight="bold"
                color={colors.grey[100]}
                mb="5px"
              >
                {client.montant}
              </Typography>
              <Chip
                label="Fidèle"
                sx={{
                  backgroundColor: colors.greenAccent[700],
                  color: colors.greenAccent[100],
                  fontWeight: "600",
                  fontSize: "12px",
                  height: "24px"
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ClientFideles;