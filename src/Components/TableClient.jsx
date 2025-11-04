import { Box, useTheme, Typography, IconButton, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { mockClients } from "../data/MockData";

const TableClient = ({ filters }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const getChipColor = (segment) => {
    switch (segment) {
      case "Premium":
        return { backgroundColor: '#fef3c7', color: '#92400e' };
      case "Standard":
        return { backgroundColor: '#dbeafe', color: '#1e3a8a' };
      case "À surveiller":
        return { backgroundColor: '#fee2e2', color: '#991b1b' };
      case "Silver":
        return { backgroundColor: '#f3f4f6', color: '#374151' };
      case "Bronze":
        return { backgroundColor: '#fef3c7', color: '#78350f' };
      default:
        return { backgroundColor: '#e5e7eb', color: '#1f2937' };
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "B2B":
        return { backgroundColor: '#fee2e2', color: '#991b1b' };
      case "B2C":
        return { backgroundColor: '#dbeafe', color: '#1e40af' };
      case "C2C":
        return { backgroundColor: '#dbeafe', color: '#1e40af' };
      default:
        return { backgroundColor: '#f3f4f6', color: '#374151' };
    }
  };

  const columns = [
    {
      field: "name",
      headerName: "Client",
      flex: 1.2,
      minWidth: 200,
      renderCell: (params) => (
        <Box>
          <Typography color={colors.grey[100]} fontWeight="500" fontSize="14px">
            {params.row.name}
          </Typography>
          <Typography color={colors.grey[400]} fontSize="12px">
            {params.row.clientId}
          </Typography>
        </Box>
      )
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,
      renderCell: (params) => {
        const typeColors = getTypeColor(params.value);
        return (
          <Chip
            label={params.value}
            size="small"
            sx={{
              ...typeColors,
              fontWeight: "600",
              fontSize: "11px",
              borderRadius: "6px"
            }}
          />
        );
      }
    },
    {
      field: "wilaya",
      headerName: "Wilaya",
      width: 130
    },
    {
      field: "station",
      headerName: "Station",
      flex: 1,
      minWidth: 180
    },
    {
      field: "segmentCLV",
      headerName: "Segment CLV",
      width: 140,
      renderCell: (params) => {
        const chipColors = getChipColor(params.value);
        return (
          <Chip
            label={params.value}
            size="small"
            sx={{
              ...chipColors,
              fontWeight: "600",
              fontSize: "11px",
              borderRadius: "6px"
            }}
          />
        );
      }
    },
    {
      field: "segmentationRFM",
      headerName: "Segmentation RFM",
      width: 160,
      renderCell: (params) => {
        const chipColors = getChipColor(params.value);
        return (
          <Chip
            label={params.value}
            size="small"
            sx={{
              ...chipColors,
              fontWeight: "600",
              fontSize: "11px",
              borderRadius: "6px"
            }}
          />
        );
      }
    },
    {
      field: "historiqueEnvoi",
      headerName: "Historique Envoi",
      width: 150,
      type: "number"
    },
    {
      field: "clvDA",
      headerName: "CLV (DA)",
      width: 130,
      type: "number",
      renderCell: (params) => (
        <Typography fontWeight="600" color={colors.grey[100]}>
          {params.value.toLocaleString()}
        </Typography>
      )
    },
    {
      field: "actions",
      headerName: "Information",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <IconButton
          size="small"
          sx={{ color: colors.redAccent[600] }}
          onClick={() => console.log("Info clicked for:", params.row.clientId)}
        >
          <InfoOutlinedIcon />
        </IconButton>
      )
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: colors.grey[900],
        borderRadius: "12px",
        padding: "25px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Box display="flex" alignItems="center" gap="10px" mb={3}>
        <PeopleOutlineIcon sx={{ color: colors.redAccent[600], fontSize: "28px" }} />
        <Typography variant="h4" fontWeight="bold" color={colors.grey[100]}>
          Liste des Clients
        </Typography>
      </Box>

      <Box
        sx={{
          height: 500,
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: `1px solid ${colors.grey[800]}`,
            color: colors.grey[100]
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: 'transparent',
            borderBottom: `2px solid ${colors.grey[700]}`,
            color: colors.grey[400],
            fontWeight: '600',
            fontSize: '13px'
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: 'transparent',
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: `1px solid ${colors.grey[700]}`,
            backgroundColor: 'transparent',
            color: colors.grey[100]
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: colors.grey[800],
          }
        }}
      >
        <DataGrid
          rows={mockClients}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          disableSelectionOnClick
          autoHeight
        />
      </Box>
    </Box>
  );
};

export default TableClient;