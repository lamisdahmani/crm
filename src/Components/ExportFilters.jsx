import { Box, Typography, useTheme, FormControl, Select, MenuItem, Button } from "@mui/material";
import { tokens } from "../theme";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { useState } from "react";

const ExportFilters = ({ segmentOptions, typeOptions, wilayaOptions, onExport }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [filters, setFilters] = useState({
    segment: "Tous Segments",
    type: "Tout Type",
    wilaya: "Toutes les Wilayas",
  });

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value,
    }));
  };

  const handleExport = () => {
    if (onExport) {
      onExport(filters);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: colors.primary[100],
        borderRadius: "8px",
        padding: "24px",
      }}
    >
      {/* Header */}
      <Box display="flex" alignItems="center" gap="10px" mb="24px">
        <FilterListOutlinedIcon sx={{ color: colors.redAccent[500], fontSize: "24px" }} />
        <Typography
          variant="h4"
          fontWeight="600"
          color={colors.grey[100]}
        >
          Filtres d'Exportation
        </Typography>
      </Box>

      {/* Filters Section */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gap="20px"
        mb="24px"
      >
        {/* Segment CLV Filter */}
        <FormControl fullWidth>
          <Typography
            variant="body2"
            color={colors.grey[300]}
            mb="8px"
            fontWeight="500"
          >
            Segment CLV
          </Typography>
          <Select
            value={filters.segment}
            onChange={(e) => handleFilterChange("segment", e.target.value)}
            sx={{
              backgroundColor: colors.primary[500],
              color: colors.grey[100],
              borderRadius: "4px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: colors.primary[300],
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: colors.primary[200],
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: colors.redAccent[500],
              },
              "& .MuiSvgIcon-root": {
                color: colors.grey[100],
              },
            }}
          >
            {segmentOptions.map((option) => (
              <MenuItem 
                key={option} 
                value={option}
                sx={{
                  color: colors.grey[100],
                  "&:hover": {
                    backgroundColor: colors.primary[400],
                  },
                  "&.Mui-selected": {
                    backgroundColor: colors.primary[600],
                    "&:hover": {
                      backgroundColor: colors.primary[500],
                    },
                  },
                }}
              >
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Type Filter */}
        <FormControl fullWidth>
          <Typography
            variant="body2"
            color={colors.grey[300]}
            mb="8px"
            fontWeight="500"
          >
            Type
          </Typography>
          <Select
            value={filters.type}
            onChange={(e) => handleFilterChange("type", e.target.value)}
            sx={{
              backgroundColor: colors.primary[500],
              color: colors.grey[100],
              borderRadius: "4px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: colors.primary[300],
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: colors.primary[200],
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: colors.redAccent[500],
              },
              "& .MuiSvgIcon-root": {
                color: colors.grey[100],
              },
            }}
          >
            {typeOptions.map((option) => (
              <MenuItem 
                key={option} 
                value={option}
                sx={{
                  color: colors.grey[100],
                  "&:hover": {
                    backgroundColor: colors.primary[400],
                  },
                  "&.Mui-selected": {
                    backgroundColor: colors.primary[600],
                    "&:hover": {
                      backgroundColor: colors.primary[500],
                    },
                  },
                }}
              >
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Wilaya Filter */}
        <FormControl fullWidth>
          <Typography
            variant="body2"
            color={colors.grey[300]}
            mb="8px"
            fontWeight="500"
          >
            Wilaya
          </Typography>
          <Select
            value={filters.wilaya}
            onChange={(e) => handleFilterChange("wilaya", e.target.value)}
            sx={{
              backgroundColor: colors.primary[500],
              color: colors.grey[100],
              borderRadius: "4px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: colors.primary[300],
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: colors.primary[200],
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: colors.redAccent[500],
              },
              "& .MuiSvgIcon-root": {
                color: colors.grey[100],
              },
            }}
          >
            {wilayaOptions.map((option) => (
              <MenuItem 
                key={option} 
                value={option}
                sx={{
                  color: colors.grey[100],
                  "&:hover": {
                    backgroundColor: colors.primary[400],
                  },
                  "&.Mui-selected": {
                    backgroundColor: colors.primary[600],
                    "&:hover": {
                      backgroundColor: colors.primary[500],
                    },
                  },
                }}
              >
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Export Button */}
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          onClick={handleExport}
          sx={{
            backgroundColor: colors.redAccent[600],
            color: "white",
            textTransform: "none",
            fontSize: "14px",
            padding: "10px 24px",
            "&:hover": {
              backgroundColor: colors.redAccent[700],
            },
          }}
          startIcon={<FileDownloadOutlinedIcon />}
        >
          Exporter avec Filtres
        </Button>
      </Box>
    </Box>
  );
};

export default ExportFilters;