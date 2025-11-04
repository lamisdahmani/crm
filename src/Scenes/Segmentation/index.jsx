import { Box, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import SegmentCards from "../../Components/SegmentCards";
import RFMDetails from "../../Components/RFMDetails";
import { 
  b2bSegmentationData, 
  b2cSegmentationData,
  rfmDetailsData 
} from "../../data/MockData";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const Segmentation = ({ userRole = "Responsable Commercial" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleExport = () => {
    console.log("Export RFM data...");
    // Logique d'export ici
  };

  return (
    <Box m="20px">
      {/* HEADER WITH EXPORT BUTTON */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb="20px">
        <Header 
          title="Analyse RFM - Segmentation Client" 
          subtitle="Récence, Fréquence, Montant - Adapté par type de client"
          userRole={userRole}
        />

        <Button
          variant="contained"
          onClick={handleExport}
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
          Export RFM
        </Button>
      </Box>

      {/* SEGMENTATION CARDS */}
      <Box 
        display="grid" 
        gridTemplateColumns="repeat(2, 1fr)" 
        gap="20px"
        mb="30px" 
      >
        <SegmentCards
          type="b2b" 
          data={b2bSegmentationData} 
          colors={colors} 
        />
        <SegmentCards
          type="b2c" 
          data={b2cSegmentationData} 
          colors={colors} 
        />
      </Box>

      {/* RFM DETAILS TABLE */}
      <RFMDetails
        data={rfmDetailsData}
        colors={colors}
      />
    </Box>
  );
};

export default Segmentation;