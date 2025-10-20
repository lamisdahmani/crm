import { Box, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import ClientFideles from "../../Components/ClientFideles";
import ClientsDormants from "../../Components/ClientsDormants";
import PanierMoyen from "../../Components/PanierMoyen";
import { clientsData, clientsDormantsData, panierFrequenceData } from "../../data/MockData";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const B2C = ({ userRole = "Responsable Commercial" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleExportB2C = () => {
    console.log("Export B2C data...");
    // Logique d'export ici
  };

  return (
    <Box m="20px">
      {/* HEADER WITH EXPORT BUTTON */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb="20px">
        <Header 
          title="Dashboard B2C" 
          subtitle="Clients fidèles vs dormants - Panier moyen - Fréquence d'achat"
          userRole={userRole}
        />
        <Button
          variant="contained"
          onClick={handleExportB2C}
          sx={{
            backgroundColor: colors.redAccent[600],
            color: "white",
            textTransform: "none",
            fontSize: "14px",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: colors.redAccent[700],
            }
          }}
          startIcon={<FileDownloadOutlinedIcon />}
        >
          Export B2C
        </Button>
      </Box>

      {/* LAYOUT */}
      <Box 
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridTemplateRows="auto"
        gap="20px"
      >
        {/* CLIENTS FIDÈLES - Left side, top */}
        <Box gridColumn="span 6">
          <ClientFideles data={clientsData} />
        </Box>

        {/* CLIENTS DORMANTS - Right side, top */}
        <Box gridColumn="span 6">
          <ClientsDormants data={clientsDormantsData} />
        </Box>

        {/* PANIER MOYEN & FRÉQUENCE - Full width, bottom */}
        <Box gridColumn="span 12">
          <PanierMoyen data={panierFrequenceData} />
        </Box>
      </Box>
    </Box>
  );
};

export default B2C;