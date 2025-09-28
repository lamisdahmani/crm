import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../Components/Header";

const PageClients = ({ userRole = "Responsable Commercial" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Header 
        title="Page Clients" 
        subtitle="Liste des clients avec filtres et statistiques"
        userRole={userRole}
      />

      {/* TODO: Add your other components here */}
      {/* ClientsFilters component */}
      {/* ClientsTable component */}
    </Box>
  );
};

export default PageClients;