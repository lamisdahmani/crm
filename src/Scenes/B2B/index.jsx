import { Box, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import TopEntreprise from "../../Components/TopEntreprise";
import EVM from "../../Components/EVM";
import { topEntreprises,evmData} from "../../data/MockData";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const B2B = ({ userRole = "Responsable Commercial" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleExportB2B = () => {
    console.log("Export B2B data...");
    // Logique d'export ici
  };


  return (
    <Box m="20px">
      {/* HEADER WITH EXPORT BUTTON */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb="20px">
        <Header 
          title="Dashboard B2B" 
          subtitle="Vue Top entreprises - Valeur mensuelle"
          userRole={userRole}
        />

        <Button
          variant="contained"
          onClick={handleExportB2B}
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
          Export B2B
        </Button>
      </Box>

      {/* VERTICAL LAYOUT */}
      <Box 
        display="flex"
        flexDirection="column"
        gap="20px"
      >
        {/* TOP ENTREPRISE */}
        <Box>
          <TopEntreprise data={topEntreprises} />
        </Box>

        {/* EVM BAR CHART */}
        <Box>
          <EVM data={evmData} title="Evolution Valeur Mensuelle B2B" />
        </Box>
      </Box>
    </Box>
  );
};

export default B2B;