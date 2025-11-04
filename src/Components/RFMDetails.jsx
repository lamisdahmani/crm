import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  Dialog,
  DialogTitle,
  DialogContent,
  Chip
} from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ApartmentIcon from '@mui/icons-material/Apartment';

const RFMDetails = ({ data, colors }) => {
  const [filter, setFilter] = useState('Tous');
  const [openModal, setOpenModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleInfoClick = (client) => {
    setSelectedClient(client);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedClient(null);
  };

  const getScoreColor = (score) => {
    if (score >= 4) return colors.greenAccent[500];
    if (score >= 3) return '#f59e0b';
    return colors.redAccent[500];
  };

  const getSegmentColor = (segment) => {
    const segmentColors = {
      'Premium': colors.greenAccent[500],
      'Silver': '#94a3b8',
      'Bronze': '#f59e0b',
      'Standard': colors.blueAccent[500]
    };
    return segmentColors[segment] || colors.grey[500];
  }; 

  return (
    <Paper
      sx={{
        p: 3,
        backgroundColor: colors.primary[100],
        borderRadius: '8px'
      }}
    >
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Box display="flex" alignItems="center" gap={1.5}>
          <SettingsIcon sx={{ color: colors.redAccent[500], fontSize: 32 }} />
          <Typography variant="h3" fontWeight="600" color={colors.grey[100]}>
            Détail Scores RFM
          </Typography>
        </Box>

        <FormControl sx={{ minWidth: 150 }}>
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            sx={{
              backgroundColor: colors.primary[400],
              color: colors.grey[100],
              height: '40px',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: colors.grey[700]
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: colors.grey[600]
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: colors.blueAccent[500]
              }
            }}
          >
            <MenuItem value="Tous">Tous</MenuItem>
            <MenuItem value="B2B">B2B</MenuItem>
            <MenuItem value="B2C">B2C</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: colors.primary[500] }}>
              <TableCell sx={{ color: colors.grey[300], fontWeight: 600, borderBottom: `1px solid ${colors.grey[700]}` }}>Client</TableCell>
              <TableCell sx={{ color: colors.grey[300], fontWeight: 600, borderBottom: `1px solid ${colors.grey[700]}` }}>Type</TableCell>
              <TableCell sx={{ color: colors.grey[300], fontWeight: 600, borderBottom: `1px solid ${colors.grey[700]}` }}>Récence (R)</TableCell>
              <TableCell sx={{ color: colors.grey[300], fontWeight: 600, borderBottom: `1px solid ${colors.grey[700]}` }}>Fréquence (F)</TableCell>
              <TableCell sx={{ color: colors.grey[300], fontWeight: 600, borderBottom: `1px solid ${colors.grey[700]}` }}>Montant (M)</TableCell>
              <TableCell sx={{ color: colors.grey[300], fontWeight: 600, borderBottom: `1px solid ${colors.grey[700]}` }}>Segmentation RFM</TableCell>
              <TableCell sx={{ color: colors.grey[300], fontWeight: 600, borderBottom: `1px solid ${colors.grey[700]}` }}>Information</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow 
                key={row.id}
                sx={{
                  '&:hover': {
                    backgroundColor: colors.primary[500]
                  }
                }}
              >
                <TableCell sx={{ borderBottom: `1px solid ${colors.grey[700]}` }}>
                  <Box>
                    <Typography color={colors.grey[100]} fontWeight={500}>
                      {row.name}
                    </Typography>
                    <Typography variant="body2" color={colors.grey[300]}>
                      {row.code}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ borderBottom: `1px solid ${colors.grey[700]}` }}>
                  <Chip
                    label={row.type}
                    sx={{
                      backgroundColor: 'transparent',
                      color: colors.redAccent[500],
                      border: `1px solid ${colors.redAccent[500]}`,
                      fontWeight: 600
                    }}
                  />
                </TableCell>
                <TableCell sx={{ borderBottom: `1px solid ${colors.grey[700]}` }}>
                  {row.isNumeric ? (
                    <Chip
                      label={row.recence}
                      sx={{
                        backgroundColor: getScoreColor(parseInt(row.recence.split('/')[0])),
                        color: 'white',
                        fontWeight: 600
                      }}
                    />
                  ) : (
                    <Typography color={colors.grey[100]}>{row.recence}</Typography>
                  )}
                </TableCell>
                <TableCell sx={{ borderBottom: `1px solid ${colors.grey[700]}` }}>
                  {row.isNumeric ? (
                    <Chip
                      label={row.frequence}
                      sx={{
                        backgroundColor: getScoreColor(parseInt(row.frequence.split('/')[0])),
                        color: 'white',
                        fontWeight: 600
                      }}
                    />
                  ) : (
                    <Typography color={colors.grey[100]}>{row.frequence}</Typography>
                  )}
                </TableCell>
                <TableCell sx={{ borderBottom: `1px solid ${colors.grey[700]}` }}>
                  {row.isNumeric ? (
                    <Chip
                      label={row.montant}
                      sx={{
                        backgroundColor: getScoreColor(parseInt(row.montant.split('/')[0])),
                        color: 'white',
                        fontWeight: 600
                      }}
                    />
                  ) : (
                    <Typography color={colors.grey[100]}>{row.montant}</Typography>
                  )}
                </TableCell>
                <TableCell sx={{ borderBottom: `1px solid ${colors.grey[700]}` }}>
                  <Chip
                    label={row.segment}
                    sx={{
                      backgroundColor: getSegmentColor(row.segment),
                      color: 'white',
                      fontWeight: 600
                    }}
                  />
                </TableCell>
                <TableCell sx={{ borderBottom: `1px solid ${colors.grey[700]}` }}>
                  <IconButton
                    onClick={() => handleInfoClick(row)}
                    sx={{
                      color: colors.redAccent[500],
                      '&:hover': {
                        backgroundColor: colors.redAccent[800]
                      }
                    }}
                  >
                    <InfoOutlinedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: colors.primary[400],
            borderRadius: '12px'
          }
        }}
      >
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center" gap={1}>
              <PersonIcon sx={{ color: colors.redAccent[500] }} />
              <Typography variant="h4" fontWeight="600" color={colors.grey[100]}>
                Informations Client
              </Typography>
            </Box>
            <IconButton onClick={handleCloseModal}>
              <CloseIcon sx={{ color: colors.grey[100] }} />
            </IconButton>
          </Box>
          <Typography variant="body2" color={colors.grey[300]} mt={1}>
            Détails complets du client {selectedClient?.code}
          </Typography>
        </DialogTitle>

        <DialogContent>
          {selectedClient && (
            <Box display="flex" flexDirection="column" gap={3} mt={2}>
              {/* Identité */}
              <Paper sx={{ p: 3, backgroundColor: colors.primary[500], borderRadius: '8px' }}>
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <PersonIcon sx={{ color: colors.redAccent[500] }} />
                  <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                    Identité
                  </Typography>
                </Box>
                <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
                  <Box>
                    <Typography variant="body2" color={colors.grey[300]}>Nom</Typography>
                    <Typography variant="body1" fontWeight={600} color={colors.grey[100]}>
                      {selectedClient.name}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color={colors.grey[300]}>ID Client</Typography>
                    <Typography variant="body1" fontWeight={600} color={colors.grey[100]}>
                      {selectedClient.code}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color={colors.grey[300]} mb={1}>Type de client</Typography>
                    <Chip
                      label={selectedClient.type}
                      sx={{
                        backgroundColor: 'transparent',
                        color: colors.redAccent[500],
                        border: `1px solid ${colors.redAccent[500]}`,
                        fontWeight: 600
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="body2" color={colors.grey[300]}>Date d'inscription</Typography>
                    <Box display="flex" alignItems="center" gap={0.5}>
                      <CalendarTodayIcon sx={{ fontSize: 16, color: colors.grey[300] }} />
                      <Typography variant="body1" fontWeight={600} color={colors.grey[100]}>
                        {selectedClient.dateInscription}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>

              {/* Localisation */}
              <Paper sx={{ p: 3, backgroundColor: colors.primary[500], borderRadius: '8px' }}>
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <LocationOnIcon sx={{ color: colors.redAccent[500] }} />
                  <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                    Localisation
                  </Typography>
                </Box>
                <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
                  <Box>
                    <Typography variant="body2" color={colors.grey[300]}>Wilaya</Typography>
                    <Typography variant="body1" fontWeight={600} color={colors.grey[100]}>
                      {selectedClient.wilaya}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color={colors.grey[300]}>Station</Typography>
                    <Box display="flex" alignItems="center" gap={0.5}>
                      <ApartmentIcon sx={{ fontSize: 16, color: colors.grey[300] }} />
                      <Typography variant="body1" fontWeight={600} color={colors.grey[100]}>
                        {selectedClient.station}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>

              {/* Analyse RFM */}
              <Paper sx={{ p: 3, backgroundColor: colors.primary[500], borderRadius: '8px' }}>
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <TrendingUpIcon sx={{ color: colors.redAccent[500] }} />
                  <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                    Analyse RFM
                  </Typography>
                </Box>
                
                <Box mb={2}>
                  <Typography variant="body2" color={colors.grey[300]} mb={1}>
                    Segmentation RFM
                  </Typography>
                  <Chip
                    label={selectedClient.segment}
                    sx={{
                      backgroundColor: getSegmentColor(selectedClient.segment),
                      color: 'white',
                      fontWeight: 600
                    }}
                  />
                </Box>

                <Box mb={2}>
                  <Typography variant="body2" color={colors.grey[300]} mb={1}>Score RFM</Typography>
                  <Typography variant="body1" fontWeight={500} color={colors.grey[100]} sx={{ fontFamily: 'monospace' }}>
                    {selectedClient.scoreRFM}
                  </Typography>
                </Box>

                <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
                  <Box>
                    <Typography variant="body2" color={colors.grey[300]}>Récence</Typography>
                    <Typography variant="h6" fontWeight={600} color={colors.grey[100]}>
                      {selectedClient.recence}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color={colors.grey[300]}>Fréquence</Typography>
                    <Typography variant="h6" fontWeight={600} color={colors.grey[100]}>
                      {selectedClient.frequence}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color={colors.grey[300]}>Montant</Typography>
                    <Typography variant="h6" fontWeight={600} color={colors.grey[100]}>
                      {selectedClient.montant}
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Activité & Performance */}
              <Paper sx={{ p: 3, backgroundColor: colors.primary[500], borderRadius: '8px' }}>
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <BusinessCenterIcon sx={{ color: colors.redAccent[500] }} />
                  <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                    Activité & Performance
                  </Typography>
                </Box>
                <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
                  <Box>
                    <Typography variant="body2" color={colors.grey[300]}>Historique d'envois</Typography>
                    <Typography variant="h4" fontWeight={700} color={colors.redAccent[500]}>
                      {selectedClient.historique}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color={colors.grey[300]}>CLV (Customer Lifetime Value)</Typography>
                    <Typography variant="h4" fontWeight={700} color={colors.greenAccent[500]}>
                      {selectedClient.clv}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Paper>
  );
};

export default RFMDetails;