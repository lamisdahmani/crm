import { useState } from "react";
import { Box, useTheme, Button, Select, MenuItem as MuiMenuItem, FormControl } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import CityShipmentCards from "../../Components/CityShipmentCards";
import EVM from "../../Components/EVM";
import { c2cCards, c2cChartData } from "../../data/MockData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const C2C = ({ userRole = "Responsable Commercial" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedRegion, setSelectedRegion] = useState("Toutes régions");
  const [selectedWilaya, setSelectedWilaya] = useState("Toutes wilayas");

  const canSeeFilters = userRole === "Responsable Commercial" || userRole === "Lead Commercial";

  const handleExportC2C = () => {
    console.log("Export C2C data...");
  };

  const dropdownStyles = {
    color: colors.grey[100],
    borderColor: colors.grey[400],
    fontSize: "14px",
    minWidth: "160px",
    height: "40px",
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.grey[400],
    },
    '& .MuiSvgIcon-root': {
      color: colors.grey[100],
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.grey[300],
    },
    '& .MuiSelect-select': {
      padding: '8px 16px',
    }
  };

  const menuProps = {
    PaperProps: {
      sx: {
        backgroundColor: colors.grey[900],
        maxHeight: '300px',
        '& .MuiMenuItem-root': {
          color: colors.grey[100],
          padding: '10px 16px',
          '&:hover': {
            backgroundColor: colors.grey[800]
          },
          '&.Mui-selected': {
            backgroundColor: colors.redAccent[600],
            color: '#ffffff',
            '&:hover': {
              backgroundColor: colors.redAccent[700]
            }
          }
        }
      }
    }
  };

  const regions = ["Toutes régions", "Centre", "Est", "Ouest", "Sud"];
  const wilayas = ["Toutes wilayas", "Alger", "Oran", "Constantine", "Annaba", "Blida", "Sétif", "Tlemcen", "Béjaïa"];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb="20px">
        <Header 
          title="Dashboard C2C" 
          subtitle="Carte de chaleur géographique des envois"
          userRole={userRole}
        />

        <Box display="flex" alignItems="center" gap="15px">
          {canSeeFilters && (
            <>
              <FormControl>
                <Select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  displayEmpty
                  IconComponent={KeyboardArrowDownIcon}
                  sx={dropdownStyles}
                  MenuProps={menuProps}
                >
                  {regions.map((region) => (
                    <MuiMenuItem key={region} value={region}>{region}</MuiMenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <Select
                  value={selectedWilaya}
                  onChange={(e) => setSelectedWilaya(e.target.value)}
                  displayEmpty
                  IconComponent={KeyboardArrowDownIcon}
                  sx={dropdownStyles}
                  MenuProps={menuProps}
                >
                  {wilayas.map((wilaya) => (
                    <MuiMenuItem key={wilaya} value={wilaya}>{wilaya}</MuiMenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          )}

          <Button
            variant="contained"
            onClick={handleExportC2C}
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
            Export C2C
          </Button>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="20px" width="100%">
        <Box width="100%">
          <EVM data={c2cChartData} title="Carte de Chaleur des Envois C2C" />
        </Box>

        <Box width="100%">
          <CityShipmentCards data={c2cCards} />
        </Box>
      </Box>
    </Box>
  );
};

export default C2C;