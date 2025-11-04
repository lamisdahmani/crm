import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const MonthlyComparison = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        backgroundColor: colors.primary[100],
        borderRadius: "8px",
        padding: "24px",
      }}
    >
      {/* Header */}
      <Box display="flex" alignItems="center" gap="10px" mb="24px">
        <DescriptionOutlinedIcon sx={{ color: colors.redAccent[500], fontSize: "24px" }} />
        <Typography
          variant="h4"
          fontWeight="600"
          color={colors.grey[100]}
        >
          Comparaison Mensuelle
        </Typography>
      </Box>

      {/* Table */}
      <Box
        sx={{
          backgroundColor: colors.primary[400],
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        {/* Table Header */}
        <Box
          display="grid"
          gridTemplateColumns="1.5fr 1fr 1.5fr 1fr 1.2fr 0.8fr"
          gap="16px"
          padding="16px 20px"
          backgroundColor={colors.primary[100]}
          borderBottom={`1px solid ${colors.primary[300]}`}
        >
          <Typography variant="body2" fontWeight="600" color={colors.grey[300]}>
            Période
          </Typography>
          <Typography variant="body2" fontWeight="600" color={colors.grey[300]}>
            Clients
          </Typography>
          <Typography variant="body2" fontWeight="600" color={colors.grey[300]}>
            Chiffre d'Affaires
          </Typography>
          <Typography variant="body2" fontWeight="600" color={colors.grey[300]}>
            Colis
          </Typography>
          <Typography variant="body2" fontWeight="600" color={colors.grey[300]}>
            CLV Moyen
          </Typography>
          <Typography variant="body2" fontWeight="600" color={colors.grey[300]}>
            Évolution
          </Typography>
        </Box>

        {/* Table Rows */}
        {data.map((row, index) => (
          <Box
            key={index}
            display="grid"
            gridTemplateColumns="1.5fr 1fr 1.5fr 1fr 1.2fr 0.8fr"
            gap="16px"
            padding="16px 20px"
            backgroundColor={colors.primary[100]}
            borderBottom={
              index < data.length - 1 ? `1px solid ${colors.primary[300]}` : "none"
            }
            sx={{
              "&:hover": {
                backgroundColor: colors.primary[500],
              },
            }}
          >
            <Typography variant="body2" color={colors.grey[100]}>
              {row.periode}
            </Typography>
            <Typography variant="body2" color={colors.grey[100]}>
              {row.clients.toLocaleString("fr-FR")}
            </Typography>
            <Typography variant="body2" color={colors.grey[100]}>
              {row.chiffreAffaires}
            </Typography>
            <Typography variant="body2" color={colors.grey[100]}>
              {row.colis.toLocaleString("fr-FR")}
            </Typography>
            <Typography variant="body2" fontWeight="600" color={colors.grey[100]}>
              {row.clvMoyen}
            </Typography>
            <Box
              sx={{
                backgroundColor: colors.greenAccent[700],
                color: colors.greenAccent[300],
                padding: "4px 8px",
                borderRadius: "4px",
                display: "inline-block",
                fontSize: "13px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              {row.evolution}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MonthlyComparison;