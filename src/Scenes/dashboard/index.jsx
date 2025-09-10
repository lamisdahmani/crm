import { useState } from "react";
import { Box, Typography, useTheme, Button, Select, MenuItem as MuiMenuItem, FormControl } from "@mui/material";
import { tokens } from "../../theme";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupIcon from "@mui/icons-material/Group";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Header from "../../Components/Header";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const Dashboard = ({ userRole = "Responsable Commercial" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // State for dropdowns
  const [selectedRegion, setSelectedRegion] = useState("Toutes régions");
  const [selectedWilaya, setSelectedWilaya] = useState("Toutes les wilaya");
  const [selectedStation, setSelectedStation] = useState("Toutes stations");

  // Data for dropdowns
  const regions = ["Toutes régions", "Nord", "Centre", "Est", "Ouest"];
  
  const wilayas = [
    "Toutes les wilaya", "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", 
    "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", 
    "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", 
    "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", 
    "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", 
    "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", 
    "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane", "Timimoun", "Bordj Badji Mokhtar", 
    "Ouled Djellal", "Béni Abbès", "In Salah", "In Guezzam", "Touggourt", "Djanet", 
    "El M'Ghair", "El Meniaa"
  ];
  
  const stations = [
    "Toutes stations", "Station Alger Centre", "Station Oran Ouest", 
    "Station Constantine Est", "Station Annaba Nord"
  ];

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header 
          title="Dashboard Général" 
          subtitle="Vue d'ensemble de l'activité "
          userRole={userRole}
        />
      </Box>

      {/* FILTER BUTTONS */}
      <Box display="flex" justifyContent="flex-end" alignItems="center" gap="15px" mb="20px">
        {/* Regions Dropdown */}
        <FormControl>
          <Select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            displayEmpty
            IconComponent={KeyboardArrowDownIcon}
            sx={{
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
            }}
            MenuProps={{
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
            }}
          >
            {regions.map((region) => (
              <MuiMenuItem key={region} value={region}>
                <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                  {region}
                </Box>
              </MuiMenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Wilayas Dropdown */}
        <FormControl>
          <Select
            value={selectedWilaya}
            onChange={(e) => setSelectedWilaya(e.target.value)}
            displayEmpty
            IconComponent={KeyboardArrowDownIcon}
            sx={{
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
            }}
            MenuProps={{
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
            }}
          >
            {wilayas.map((wilaya) => (
              <MuiMenuItem key={wilaya} value={wilaya}>
                <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                  {wilaya}
                </Box>
              </MuiMenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Stations Dropdown */}
        <FormControl>
          <Select
            value={selectedStation}
            onChange={(e) => setSelectedStation(e.target.value)}
            displayEmpty
            IconComponent={KeyboardArrowDownIcon}
            sx={{
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
            }}
            MenuProps={{
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
            }}
          >
            {stations.map((station) => (
              <MuiMenuItem key={station} value={station}>
                <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                  {station}
                </Box>
              </MuiMenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Export Button */}
        <Button
          variant="contained"
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

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        mt="10px"
      >
        {/* ROW 1 - KPI Cards */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.grey[900]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="20px"
          borderLeft={`4px solid ${colors.greenAccent[500]}`} 
          borderRadius="12px"
          boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
        >
          <Box>
            <Typography
              variant="h6"
              fontWeight="500"
              color={colors.grey[100]}
              mb="5px"
            >
              Montant Total des Envois
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              color={colors.grey[100]}
              mb="5px"
            >
              2847500 DA
            </Typography>
            <Box display="flex" alignItems="center">
              <TrendingUpIcon sx={{ color: colors.greenAccent[500], mr: "5px" }} />
              <Typography
                variant="body2"
                color={colors.greenAccent[500]}
                fontWeight="500"
              >
                +12.5%
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          backgroundColor={colors.grey[900]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="20px"
          borderLeft={`4px solid ${colors.blueAccent[500]}`}
          borderRadius="12px"
          boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
        >
          <Box>
            <Typography
              variant="h6"
              fontWeight="500"
              color={colors.grey[100]}
              mb="5px"
            >
              Nombre Total de Clients
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              color={colors.grey[100]}
              mb="5px"
            >
              15847
            </Typography>
            <Box display="flex" alignItems="center">
              <GroupIcon sx={{ color: colors.blueAccent[500], mr: "5px" }} />
              <Typography
                variant="body2"
                color={colors.blueAccent[500]}
                fontWeight="500"
              >
                +8.2%
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          backgroundColor={colors.grey[900]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="20px"
          borderLeft={`4px solid ${colors.redAccent[500]}`}
          borderRadius="12px"
          boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
        >
          <Box>
            <Typography
              variant="h6"
              fontWeight="500"
              color={colors.grey[100]}
              mb="5px"
            >
              Nombre de Colis Livrés
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              color={colors.grey[100]}
              mb="5px"
            >
              89234
            </Typography>
            <Box display="flex" alignItems="center">
              <LocalShippingIcon sx={{ color: colors.redAccent[500], mr: "5px" }} />
              <Typography
                variant="body2"
                color={colors.redAccent[500]}
                fontWeight="500"
              >
                +15.3%
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ROW 2 - Chart Placeholders */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          p="20px"
          display="flex"
          flexDirection="column"
        >
          <Box display="flex" alignItems="center" mb="20px">
            <TrendingUpIcon sx={{ color: colors.redAccent[500], mr: "10px" }} />
            <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
            >
              Évolution Mensuelle par Catégorie
            </Typography>
          </Box>
          <Box 
            height="300px" 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
            backgroundColor={colors.primary[500]}
            borderRadius="8px"
          >
            <Typography variant="h6" color={colors.grey[300]}>
              Line Chart Component (To be created)
            </Typography>
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          p="20px"
          display="flex"
          flexDirection="column"
        >
          <Box display="flex" alignItems="center" mb="20px">
            <Box
              width="12px"
              height="12px"
              backgroundColor={colors.redAccent[500]}
              borderRadius="50%"
              mr="10px"
            />
            <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
            >
              Répartition par Catégorie
            </Typography>
          </Box>
          
          {/* Pie Chart Placeholder */}
          <Box 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
            height="200px"
            mb="20px"
            backgroundColor={colors.primary[500]}
            borderRadius="8px"
          >
            <Typography variant="h6" color={colors.grey[300]}>
              Pie Chart Component (To be created)
            </Typography>
          </Box>

          {/* Legend */}
          <Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb="10px">
              <Box display="flex" alignItems="center">
                <Box
                  width="12px"
                  height="12px"
                  backgroundColor={colors.redAccent[500]}
                  borderRadius="50%"
                  mr="8px"
                />
                <Typography variant="body2" color={colors.grey[100]}>
                  B2B
                </Typography>
              </Box>
              <Typography variant="body2" color={colors.grey[100]} fontWeight="bold">
                45%
              </Typography>
            </Box>
            
            <Box display="flex" alignItems="center" justifyContent="space-between" mb="10px">
              <Box display="flex" alignItems="center">
                <Box
                  width="12px"
                  height="12px"
                  backgroundColor={colors.blueAccent[500]}
                  borderRadius="50%"
                  mr="8px"
                />
                <Typography variant="body2" color={colors.grey[100]}>
                  B2C
                </Typography>
              </Box>
              <Typography variant="body2" color={colors.grey[100]} fontWeight="bold">
                35%
              </Typography>
            </Box>
            
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <Box
                  width="12px"
                  height="12px"
                  backgroundColor={colors.greenAccent[500]}
                  borderRadius="50%"
                  mr="8px"
                />
                <Typography variant="body2" color={colors.grey[100]}>
                  C2C
                </Typography>
              </Box>
              <Typography variant="body2" color={colors.grey[100]} fontWeight="bold">
                20%
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;