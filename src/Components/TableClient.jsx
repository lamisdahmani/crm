import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { mockClients } from "../data/MockData";

const TableClient = ({ filters }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const getSegmentStyle = (segment) => {
    switch (segment) {
      case "Premium":
        return { 
          backgroundColor: '#fef3c7', 
          color: '#92400e',
          padding: '4px 12px',
          borderRadius: '4px',
          fontWeight: '600',
          fontSize: '12px',
          display: 'inline-block'
        };
      case "Standard":
        return { 
          backgroundColor: '#dbeafe', 
          color: '#1e3a8a',
          padding: '4px 12px',
          borderRadius: '4px',
          fontWeight: '600',
          fontSize: '12px',
          display: 'inline-block'
        };
      case "À surveiller":
        return { 
          backgroundColor: '#fee2e2', 
          color: '#991b1b',
          padding: '4px 12px',
          borderRadius: '4px',
          fontWeight: '600',
          fontSize: '12px',
          display: 'inline-block'
        };
      case "Silver":
        return { 
          backgroundColor: '#f3f4f6', 
          color: '#374151',
          padding: '4px 12px',
          borderRadius: '4px',
          fontWeight: '600',
          fontSize: '12px',
          display: 'inline-block'
        };
      case "Bronze":
        return { 
          backgroundColor: '#fef3c7', 
          color: '#78350f',
          padding: '4px 12px',
          borderRadius: '4px',
          fontWeight: '600',
          fontSize: '12px',
          display: 'inline-block'
        };
      default:
        return { 
          backgroundColor: '#e5e7eb', 
          color: '#1f2937',
          padding: '4px 12px',
          borderRadius: '4px',
          fontWeight: '600',
          fontSize: '12px',
          display: 'inline-block'
        };
    }
  };

  const getTypeStyle = (type) => {
    switch (type) {
      case "B2B":
        return { 
          backgroundColor: '#fee2e2', 
          color: '#991b1b',
          padding: '4px 10px',
          borderRadius: '4px',
          fontWeight: '600',
          fontSize: '12px',
          display: 'inline-block'
        };
      case "B2C":
        return { 
          backgroundColor: '#dbeafe', 
          color: '#1e40af',
          padding: '4px 10px',
          borderRadius: '4px',
          fontWeight: '600',
          fontSize: '12px',
          display: 'inline-block'
        };
      case "C2C":
        return { 
          backgroundColor: '#dbeafe', 
          color: '#1e40af',
          padding: '4px 10px',
          borderRadius: '4px',
          fontWeight: '600',
          fontSize: '12px',
          display: 'inline-block'
        };
      default:
        return { 
          backgroundColor: '#f3f4f6', 
          color: '#374151',
          padding: '4px 10px',
          borderRadius: '4px',
          fontWeight: '600',
          fontSize: '12px',
          display: 'inline-block'
        };
    }
  };

  const columns = [
    {
      field: "client",
      headerName: "Client",
      flex: 1,
      minWidth: 200,
      renderCell: (params) => (
        <Box>
          <Typography 
            sx={{ 
              color: colors.grey[100], 
              fontWeight: "500", 
              fontSize: "14px",
              mb: "2px"
            }}
          >
            {params.row.name}
          </Typography>
          <Typography 
            sx={{ 
              color: colors.grey[400], 
              fontSize: "12px" 
            }}
          >
            {params.row.clientId}
          </Typography>
        </Box>
      )
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,
      renderCell: (params) => (
        <Box sx={getTypeStyle(params.value)}>
          {params.value}
        </Box>
      )
    },
    {
      field: "wilaya",
      headerName: "Wilaya",
      width: 150,
      renderCell: (params) => (
        <Typography sx={{ color: colors.grey[100], fontSize: "14px" }}>
          {params.value}
        </Typography>
      )
    },
    {
      field: "station",
      headerName: "Station",
      flex: 1,
      minWidth: 200,
      renderCell: (params) => (
        <Typography sx={{ color: colors.grey[100], fontSize: "14px" }}>
          {params.value}
        </Typography>
      )
    },
    {
      field: "segmentCLV",
      headerName: "Segment CLV",
      width: 150,
      renderCell: (params) => (
        <Box sx={getSegmentStyle(params.value)}>
          {params.value}
        </Box>
      )
    },
    {
      field: "segmentationRFM",
      headerName: "Segmentation RFM",
      width: 170,
      renderCell: (params) => (
        <Box sx={getSegmentStyle(params.value)}>
          {params.value}
        </Box>
      )
    },
    {
      field: "historiqueEnvoi",
      headerName: "Historique Envoi",
      width: 150,
      renderCell: (params) => (
        <Typography sx={{ color: colors.grey[100], fontSize: "14px" }}>
          {params.value}
        </Typography>
      )
    },
    {
      field: "clvDA",
      headerName: "CLV (DA)",
      width: 150,
      renderCell: (params) => (
        <Typography sx={{ 
          fontWeight: "600", 
          color: colors.grey[100],
          fontSize: "14px"
        }}>
          {params.value.toLocaleString()} DA
        </Typography>
      )
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: colors.primary[400],
        borderRadius: "8px",
        padding: "24px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
      }}
    >
      {/* Header */}
      <Box display="flex" alignItems="center" gap="10px" mb="20px">
        <PeopleOutlineIcon sx={{ color: colors.redAccent[500], fontSize: "24px" }} />
        <Typography variant="h4" fontWeight="600" color={colors.grey[100]}>
          Liste des Clients
        </Typography>
      </Box>

      {/* DataGrid */}
      <Box
        sx={{
          height: 600,
          width: '100%',
          '& .MuiDataGrid-root': {
            border: 'none',
            backgroundColor: 'transparent',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: `1px solid ${colors.primary[300]}`,
            color: colors.grey[100],
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.primary[500],
            borderBottom: `1px solid ${colors.primary[300]}`,
            color: colors.grey[300],
            fontWeight: '600',
            fontSize: '13px',
          },
          '& .MuiDataGrid-columnHeader': {
            '&:focus, &:focus-within': {
              outline: 'none',
            },
          },
          '& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within': {
            outline: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: `1px solid ${colors.primary[300]}`,
            backgroundColor: colors.primary[400],
            color: colors.grey[100],
          },
          '& .MuiTablePagination-root': {
            color: colors.grey[100],
          },
          '& .MuiTablePagination-selectIcon': {
            color: colors.grey[100],
          },
          '& .MuiDataGrid-row': {
            backgroundColor: colors.primary[400],
            '&:hover': {
              backgroundColor: colors.primary[500],
            },
          },
          '& .MuiDataGrid-selectedRowCount': {
            color: colors.grey[100],
          },
        }}
      >
        <DataGrid
          rows={mockClients}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 100, page: 0 }
            },
          }}
          pageSizeOptions={[25, 50, 100]}
          disableRowSelectionOnClick
          disableColumnMenu
          sx={{
            '& .MuiDataGrid-cellContent': {
              width: '100%',
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default TableClient;