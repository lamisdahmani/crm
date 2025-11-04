import { Box, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import PDE from "../../Components/PDE";
import MonthlyComparison from "../../Components/MonthlyComparison";
import ExportFiles from "../../Components/FilesExport";
import ExportFilters from "../../Components/ExportFilters";
import { MonthlyComparisonData, mockScheduledExports, mockExportFiles,mockFilterOptions } from "../../data/MockData";

const Rapport = ({ userRole = "Responsable Commercial" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleExport = () => {
    console.log("Export Rfm data...");
    // Logique d'export ici
  };

  const handleModify = (row) => {
    console.log("Modify scheduled export:", row);
    // Logique de modification ici
  };

  const handleExecute = (row) => {
    console.log("Execute export:", row);
    // Logique d'exécution ici
  };

  const handleDownload = (file) => {
    console.log("Download file:", file);
    // Logique de téléchargement ici
  };

  const handleFilterExport = (filters) => {
    console.log("Export with filters:", filters);
    // Logique d'exportation avec filtres ici
  };

  return (
    <Box m="20px">
      {/* HEADER WITH EXPORT BUTTON */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb="20px">
        <Header 
          title="Rapports et Exportation" 
          subtitle="Rapports mensuels automatiques - Export par client, segment ou région"
          userRole={userRole}
        />

        <Button
          variant="contained"
          onClick={handleExport}
          sx={{
            backgroundColor: colors.redAccent[500],
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
          Generer Rapport
        </Button>
      </Box>

      {/* EXPORT FILTERS COMPONENT */}
      <Box mb="20px">
        <ExportFilters 
          segmentOptions={mockFilterOptions.segments}
          typeOptions={mockFilterOptions.types}
          wilayaOptions={mockFilterOptions.wilayas}
          onExport={handleFilterExport}
        />
      </Box>

      {/* MONTHLY COMPARISON COMPONENT */}
      <Box mb="20px">
        <MonthlyComparison data={MonthlyComparisonData} />
      </Box>

      {/* SCHEDULED EXPORTS COMPONENT */}
      <Box mb="20px">
        <PDE
          data={mockScheduledExports}
          onModify={handleModify}
          onExecute={handleExecute}
        />
      </Box>

      {/* EXPORT FILES COMPONENT */}
      <ExportFiles 
        data={mockExportFiles}
        onDownload={handleDownload}
      />
    </Box>
  );
};

export default Rapport;