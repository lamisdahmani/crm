import { Box, Typography, useTheme, Chip } from "@mui/material";
import { tokens } from "../theme";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ClientsDormants = ({ data }) => {
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
        <AccessTimeIcon
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
          Clients Dormants
        </Typography>
      </Box>

      {/* Liste des clients dormants */}
      <Box display="flex" flexDirection="column" gap="20px">
        {data.map((client) => (
          <Box
            key={client.id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="20px"
            backgroundColor={colors.redAccent[900]}
            borderRadius="8px"
            sx={{
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: colors.redAccent[800],
                transform: "translateX(5px)"
              }
            }}
          >
            {/* Partie gauche: Nom et dernière commande */}
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
                Dernière commande: {client.derniereCommande}
              </Typography>
            </Box>

            {/* Partie droite: Badge nombre de jours */}
            <Box textAlign="right">
              <Chip
                label={`${client.joursInactif} jours`}
                sx={{
                  backgroundColor: colors.redAccent[600],
                  color: "white",
                  fontWeight: "600",
                  fontSize: "14px",
                  height: "32px",
                  minWidth: "90px"
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ClientsDormants;