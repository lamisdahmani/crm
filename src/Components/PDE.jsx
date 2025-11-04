import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const PDE = ({ data, onModify, onExecute }) => {
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
        <AccessTimeOutlinedIcon sx={{ color: colors.redAccent[500], fontSize: "24px" }} />
        <Typography
          variant="h4"
          fontWeight="600"
          color={colors.grey[100]}
        >
          Planification des Exports Automatiques
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
          gridTemplateColumns="2fr 1.5fr 1fr 1.5fr"
          gap="16px"
          padding="16px 20px"
          backgroundColor={colors.primary[100]}
          borderBottom={`1px solid ${colors.primary[300]}`}
        >
          <Typography variant="body2" fontWeight="600" color={colors.grey[300]}>
            Rapport
          </Typography>
          <Typography variant="body2" fontWeight="600" color={colors.grey[300]}>
            Prochain Export
          </Typography>
          <Typography variant="body2" fontWeight="600" color={colors.grey[300]}>
            Statut
          </Typography>
          <Typography variant="body2" fontWeight="600" color={colors.grey[300]}>
            Actions
          </Typography>
        </Box>

        {/* Table Rows */}
        {data.map((row, index) => (
          <Box
            key={index}
            display="grid"
            gridTemplateColumns="2fr 1.5fr 1fr 1.5fr"
            gap="16px"
            padding="16px 20px"
            alignItems="center"
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
              {row.rapport}
            </Typography>
            <Typography variant="body2" color={colors.grey[100]}>
              {row.prochainExport}
            </Typography>
            <Box
              sx={{
                backgroundColor: colors.greenAccent[700],
                color: colors.greenAccent[300],
                padding: "6px 12px",
                borderRadius: "4px",
                display: "inline-block",
                fontSize: "13px",
                fontWeight: "600",
                textAlign: "center",
                width: "fit-content",
              }}
            >
              {row.statut}
            </Box>
            <Box display="flex" gap="8px">
              <Button
                variant="outlined"
                size="small"
                onClick={() => onModify && onModify(row)}
                sx={{
                  color: colors.grey[100],
                  borderColor: colors.grey[700],
                  textTransform: "none",
                  fontSize: "13px",
                  padding: "6px 16px",
                  "&:hover": {
                    borderColor: colors.grey[500],
                    backgroundColor: colors.primary[500],
                  },
                }}
              >
                Modifier
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => onExecute && onExecute(row)}
                sx={{
                  color: colors.grey[100],
                  borderColor: colors.grey[700],
                  textTransform: "none",
                  fontSize: "13px",
                  padding: "6px 16px",
                  "&:hover": {
                    borderColor: colors.grey[500],
                    backgroundColor: colors.primary[500],
                  },
                }}
              >
                Exécuter
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PDE;