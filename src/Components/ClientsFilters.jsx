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

const ClientsFilters = ({ userRole, onFilterChange }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWilaya, setSelectedWilaya] = useState("Toutes");
  const [selectedStation, setSelectedStation] = useState("Toutes stations");
  const [selectedSegment, setSelectedSegment] = useState("Tous segments");
  const [selectedType, setSelectedType] = useState("Tous types");

  const wilayas = ["Toutes", "Alger", "Oran", "Constantine", "Annaba", "Blida", "Sétif"];
  const stations = ["Toutes stations", "Station Alger Centre", "Station Oran Ouest", "Station Constantine Est", "Station Blida Sud"];
  const segments = ["Tous segments", "Premium", "Standard", "À surveiller"];
  const types = ["Tous types", "B2B", "B2C", "C2C"];

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
    width: "200px",
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

  const handleChange = (field, value) => {
    const newFilters = {
      search: searchQuery,
      wilaya: selectedWilaya,
      station: selectedStation,
      segment: selectedSegment,
      type: selectedType,
      [field]: value
    };

    switch(field) {
      case 'search':
        setSearchQuery(value);
        break;
      case 'wilaya':
        setSelectedWilaya(value);
        break;
      case 'station':
        setSelectedStation(value);
        break;
      case 'segment':
        setSelectedSegment(value);
        break;
      case 'type':
        setSelectedType(value);
        break;
      default:
        break;
    }

    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  return (
    <Box 
      sx={{
        backgroundColor: colors.grey[900],
        padding: "20px 25px",
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        mb: "20px"
      }}
    >
      <Box 
        display="flex" 
        alignItems="center" 
        gap="15px"
        flexWrap="nowrap"
        sx={{
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: colors.grey[800],
          },
          "&::-webkit-scrollbar-thumb": {
            background: colors.grey[600],
            borderRadius: "4px",
          },
        }}
      >
        {/* Search Bar */}
        <Box
          display="flex"
          alignItems="center"
          backgroundColor={colors.grey[900]}
          border={`1px solid ${colors.grey[700]}`}
          borderRadius="4px"
          sx={{ 
            minWidth: "300px",
            height: "50px"
          }}
        >
          <SearchIcon sx={{ ml: 2, color: colors.grey[300] }} />
          <InputBase
            placeholder="Rechercher un client..."
            value={searchQuery}
            onChange={(e) => handleChange('search', e.target.value)}
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

        {/* Wilaya Filter */}
        {visibleFilters.showWilaya && (
          <FormControl sx={{ minWidth: "200px" }}>
            <Select
              value={selectedWilaya}
              onChange={(e) => handleChange('wilaya', e.target.value)}
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

        {/* Station Filter */}
        {visibleFilters.showStation && (
          <FormControl sx={{ minWidth: "200px" }}>
            <Select
              value={selectedStation}
              onChange={(e) => handleChange('station', e.target.value)}
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

        {/* Segment Filter */}
        {visibleFilters.showSegment && (
          <FormControl sx={{ minWidth: "200px" }}>
            <Select
              value={selectedSegment}
              onChange={(e) => handleChange('segment', e.target.value)}
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

        {/* Type Filter */}
        {visibleFilters.showType && (
          <FormControl sx={{ minWidth: "200px" }}>
            <Select
              value={selectedType}
              onChange={(e) => handleChange('type', e.target.value)}
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
    </Box>
  );
};

export default ClientsFilters;