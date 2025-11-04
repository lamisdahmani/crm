import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";

const FilesExport = ({ data, onDownload }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
        <GetAppOutlinedIcon sx={{ color: colors.redAccent[500], fontSize: "24px" }} />
        <Typography
          variant="h4"
          fontWeight="600"
          color={colors.grey[100]}
        >
          Fichiers à Exporter
        </Typography>
      </Box>

      {/* Export Items */}
      <Box display="flex" flexDirection="column" gap="16px">
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: colors.primary[100],
              borderRadius: "8px",
              padding: "20px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "&:hover": {
                backgroundColor: colors.primary[100],
              },
            }}
          >
            {/* Left Section - Title and Description */}
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
                mb="4px"
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color={colors.grey[300]}
                mb="8px"
              >
                {item.description}
              </Typography>
              <Box display="flex" alignItems="center" gap="12px">
                <Typography
                  variant="caption"
                  sx={{
                    backgroundColor: colors.primary[100],
                    color: colors.grey[300],
                    padding: "4px 10px",
                    borderRadius: "4px",
                    fontSize: "12px",
                  }}
                >
                  {item.formats}
                </Typography>
                <Typography
                  variant="caption"
                  color={colors.grey[400]}
                  fontSize="12px"
                >
                  Fréquence: {item.frequency}
                </Typography>
              </Box>
            </Box>

            {/* Right Section - Last Export Date and Download Button */}
            <Box display="flex" alignItems="center" gap="24px">
              <Box textAlign="right">
                <Typography
                  variant="caption"
                  color={colors.grey[400]}
                  fontSize="12px"
                  display="block"
                >
                  Dernier export
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  {item.lastExport}
                </Typography>
              </Box>
              <Button
                variant="contained"
                onClick={() => onDownload && onDownload(item)}
                sx={{
                  backgroundColor: colors.redAccent[600],
                  color: "white",
                  textTransform: "none",
                  fontSize: "14px",
                  padding: "8px 20px",
                  minWidth: "130px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[700],
                  },
                }}
                startIcon={<FileDownloadOutlinedIcon />}
              >
                Télécharger
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FilesExport;