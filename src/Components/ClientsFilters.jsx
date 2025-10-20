import { useState } from "react";
import { 
  Box, 
  useTheme,
  Select,
  MenuItem,
  FormControl,
  InputBase
} from "@mui/material";
import { tokens } from "../theme";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ClientsFilters = ({ userRole }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // États pour les filtres
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWilaya, setSelectedWilaya] = useState("Toutes");
  const [selectedStation, setSelectedStation] = useState("Toutes stations");
  const [selectedSegment, setSelectedSegment] = useState("Tous segments");
  const [selectedType, setSelectedType] = useState("Tous types");

  // Données mock pour les dropdowns
  const wilayas = ["Toutes", "Alger", "Oran", "Constantine", "Annaba", "Blida", "Sétif"];
  const stations = ["Toutes stations", "Station A", "Station B", "Station C"];
  const segments = ["Tous segments", "Gold", "Silver", "Bronze"];
  const types = ["Tous types", "B2B", "B2C", "C2C"];

  // Déterminer quels filtres afficher selon le rôle
  const getVisibleFilters = (role) => {
    switch (role) {
      case "Responsable Commercial":
        return {
          showWilaya: true,
          showStation: true,
          showSegment: true,
          showType: true
        };
      case "Lead Commercial":
        return {
          showWilaya: true,
          showStation: false,
          showSegment: true,
          showType: true
        };
      case "Chef Commercial":
        return {
          showWilaya: false,
          showStation: true,
          showSegment: true,
          showType: true
        };
      default:
        return {
          showWilaya: true,
          showStation: true,
          showSegment: true,
          showType: true
        };
    }
  };

  const visibleFilters = getVisibleFilters(userRole);

  const dropdownStyles = {
    backgroundColor: colors.grey[900],
    color: colors.grey[100],
    fontSize: "14px",
    minWidth: "180px",
    height: "50px",
    borderRadius: "4px",
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.grey[700],
    },
    '& .MuiSvgIcon-root': {
      color: colors.grey[100],
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.grey[600],
    },
    '& .MuiSelect-select': {
      padding: '14px 16px',
    }
  };

  const menuProps = {
    PaperProps: {
      sx: {
        backgroundColor: colors.grey[900],
        maxHeight: '300px',
        '& .MuiMenuItem-root': {
          color: colors.grey[100],
          padding: '12px 16px',
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
    <Box 
      display="flex" 
      alignItems="center" 
      gap="15px"
      sx={{
        backgroundColor: colors.grey[900],
        padding: "20px 25px",
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        mb: "20px"
      }}
    >
      {/* Search Bar - Prend toute la largeur disponible */}
      <Box
        display="flex"
        alignItems="center"
        backgroundColor={colors.grey[900]}
        border={`1px solid ${colors.grey[700]}`}
        borderRadius="4px"
        sx={{ 
          flex: 1,
          height: "50px"
        }}
      >
        <SearchIcon sx={{ ml: 2, color: colors.grey[300] }} />
        <InputBase
          placeholder="Rechercher un client..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            ml: 1,
            flex: 1,
            color: colors.grey[100],
            pr: 2,
            '& input::placeholder': {
              color: colors.grey[400],
              opacity: 1
            }
          }}
        />
      </Box>

      {/* Wilaya Dropdown - Responsable & Lead Commercial */}
      {visibleFilters.showWilaya && (
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
              <MenuItem key={wilaya} value={wilaya}>
                {wilaya}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* Station Dropdown - Responsable & Chef Commercial */}
      {visibleFilters.showStation && (
        <FormControl>
          <Select
            value={selectedStation}
            onChange={(e) => setSelectedStation(e.target.value)}
            displayEmpty
            IconComponent={KeyboardArrowDownIcon}
            sx={dropdownStyles}
            MenuProps={menuProps}
          >
            {stations.map((station) => (
              <MenuItem key={station} value={station}>
                {station}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* Segment Dropdown - Tous les rôles */}
      {visibleFilters.showSegment && (
        <FormControl>
          <Select
            value={selectedSegment}
            onChange={(e) => setSelectedSegment(e.target.value)}
            displayEmpty
            IconComponent={KeyboardArrowDownIcon}
            sx={dropdownStyles}
            MenuProps={menuProps}
          >
            {segments.map((segment) => (
              <MenuItem key={segment} value={segment}>
                {segment}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* Type Dropdown - Tous les rôles */}
      {visibleFilters.showType && (
        <FormControl>
          <Select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            displayEmpty
            IconComponent={KeyboardArrowDownIcon}
            sx={dropdownStyles}
            MenuProps={menuProps}
          >
            {types.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Box>
  );
};

export default ClientsFilters;