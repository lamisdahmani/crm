import { useState } from "react";
import { Box, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import ClientsFilters from "../../Components/ClientsFilters";
import TableClient from "../../Components/TableClient";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const PageClients = ({ userRole = "Responsable Commercial" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    console.log("Filters changed:", newFilters);
  };

  const handleMonthlyDownload = () => {
    console.log("Téléchargement mensuel...");
    // Add your download logic here
  };

  const handleAnnualDownload = () => {
    console.log("Téléchargement annuel...");
    // Add your download logic here
  };

  return (
    <Box m="20px">
      {/* HEADER WITH DOWNLOAD BUTTONS */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb="20px">
        <Header 
          title="Page Clients" 
          subtitle="Liste des clients avec filtres et statistiques"
          userRole={userRole}
        />

        <Box display="flex" gap="15px">
          <Button
            variant="outlined"
            onClick={handleMonthlyDownload}
            sx={{
              color: colors.grey[100],
              borderColor: colors.grey[400],
              textTransform: "none",
              fontSize: "14px",
              padding: "10px 20px",
              "&:hover": {
                borderColor: colors.grey[300],
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              }
            }}
            startIcon={<FileDownloadOutlinedIcon />}
          >
            Téléchargement Mensuel
          </Button>

          <Button
            variant="contained"
            onClick={handleAnnualDownload}
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
            Téléchargement Annuel
          </Button>
        </Box>
      </Box>

      {/* FILTERS COMPONENT */}
      <ClientsFilters 
        userRole={userRole} 
        onFilterChange={handleFilterChange}
      />

      {/* CLIENTS TABLE */}
      <ClientsTable filters={filters} />
    </Box>
  );
};

export default PageClients;