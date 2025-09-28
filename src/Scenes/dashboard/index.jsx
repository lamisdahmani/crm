import { useState } from "react";
import { 
  Box, 
  Typography,
  useTheme, 
  Button, 
  Select, 
  MenuItem as MuiMenuItem, 
  FormControl 
} from "@mui/material";
import { tokens } from "../../theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import KPICard from "../../Components/KPICards";
import CustomPieChart from "../../Components/PieChart";
import CustomLineChart from "../../Components/LineChart";
import { mockKPIData, mockLineChartData, mockPieChartData, mockFilterData } from "../../data/MockData";

const Dashboard = ({ userRole = "Responsable Commercial" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedRegion, setSelectedRegion] = useState("Toutes régions");
  const [selectedWilaya, setSelectedWilaya] = useState("Toutes les wilaya");
  const [selectedStation, setSelectedStation] = useState("Toutes stations");

  const getRoleAccessText = (role) => {
    switch (role) {
      case "Responsable Commercial":
        return "Toutes les données";
      case "Lead Commercial":
        return "Région/Wilaya";
      case "Chef Commercial":
        return "Station";
      default:
        return "Toutes les données";
    }
  };

  const getAvailableFilters = (role) => {
    switch (role) {
      case "Responsable Commercial":
        return {
          showRegions: true,
          showWilayas: true,
          showStations: true
        };
      case "Lead Commercial":
        return {
          showRegions: false,
          showWilayas: true,
          showStations: true
        };
      case "Chef Commercial":
        return {
          showRegions: false,
          showWilayas: false,
          showStations: true
        };
      default:
        return {
          showRegions: true,
          showWilayas: true,
          showStations: true
        };
    }
  };

  const availableFilters = getAvailableFilters(userRole);

  const handleExport = () => {
    console.log("Exporting data...", {
      region: selectedRegion,
      wilaya: selectedWilaya,
      station: selectedStation,
      userRole: userRole
    });
  };

  const dropdownStyles = {
    color: colors.grey[100],
    borderColor: colors.grey[400],
    fontSize: "14px",
    minWidth: "140px",
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

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb="20px">
        <Box>
          <Typography
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "0 0 5px 0" }}
          >
            Dashboard Général
          </Typography>
          <Typography variant="h5" color={colors.greenAccent[400]} sx={{ mb: 1 }}>
            Vue d'ensemble de l'activité 
          </Typography>
          
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: colors.blueAccent[500],
                mr: 1,
              }}
            />
            <Typography 
              variant="body2" 
              sx={{ 
                color: colors.blueAccent[500],
                fontWeight: "medium"
              }}
            >
              Accès: {getRoleAccessText(userRole)}
            </Typography>
          </Box>
        </Box>
        
        <Box display="flex" alignItems="center" gap="15px" sx={{ mt: 1 }}>
          {availableFilters.showRegions && (
            <FormControl>
              <Select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                displayEmpty
                IconComponent={KeyboardArrowDownIcon}
                sx={dropdownStyles}
                MenuProps={menuProps}
              >
                {mockFilterData.regions.map((region) => (
                  <MuiMenuItem key={region} value={region}>
                    <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                      {region}
                    </Box>
                  </MuiMenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          {availableFilters.showWilayas && (
            <FormControl>
              <Select
                value={selectedWilaya}
                onChange={(e) => setSelectedWilaya(e.target.value)}
                displayEmpty
                IconComponent={KeyboardArrowDownIcon}
                sx={{ ...dropdownStyles, minWidth: "160px" }}
                MenuProps={menuProps}
              >
                {mockFilterData.wilayas.map((wilaya) => (
                  <MuiMenuItem key={wilaya} value={wilaya}>
                    <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                      {wilaya}
                    </Box>
                  </MuiMenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          {availableFilters.showStations && (
            <FormControl>
              <Select
                value={selectedStation}
                onChange={(e) => setSelectedStation(e.target.value)}
                displayEmpty
                IconComponent={KeyboardArrowDownIcon}
                sx={dropdownStyles}
                MenuProps={menuProps}
              >
                {mockFilterData.stations.map((station) => (
                  <MuiMenuItem key={station} value={station}>
                    <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                      {station}
                    </Box>
                  </MuiMenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          <Button
            variant="contained"
            onClick={handleExport}
            sx={{
              backgroundColor: colors.redAccent[600],
              color: "white",
              textTransform: "none",
              fontSize: "14px",
              padding: "8px 16px",
              "&:hover": {
                backgroundColor: colors.redAccent[700],
              }
            }}
            startIcon={<FileDownloadIcon />}
          >
            Export
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        mt="10px"
      >
        {mockKPIData.map((kpi) => (
          <KPICard
            key={kpi.id}
            title={kpi.title}
            value={kpi.value}
            percentage={kpi.percentage}
            icon={kpi.icon}
            color={kpi.color}
            isPositive={kpi.isPositive}
          />
        ))}

        <CustomLineChart
          data={mockLineChartData}
          title="Évolution Mensuelle par Catégorie"
        />

        <CustomPieChart
          data={mockPieChartData}
          title="Répartition par Catégorie"
        />
      </Box>
    </Box>
  );
};

export default Dashboard;