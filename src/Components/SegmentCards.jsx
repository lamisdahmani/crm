// SegmentCard.jsx - Composant unique réutilisable
import React from 'react';
import { Box, Typography, Paper } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const SegmentCards = ({ type, data, colors }) => {
  const isB2B = type === 'b2b';
  
  const Icon = isB2B ? GroupIcon : TrendingUpIcon;
  const iconColor = isB2B ? colors.redAccent[600] : colors.blueAccent[600];
  const title = isB2B ? 'B2B - 3 Catégories' : 'B2C - 5 Scores';

  return (
    <Paper
      sx={{
        p: 3,
        backgroundColor: colors.primary[100],
        borderRadius: '8px',
        height: '100%'
      }}
    >
      {/* Header */}
      <Box display="flex" alignItems="center" gap={1} mb={3}>
        <Icon sx={{ color: iconColor, fontSize: 28 }} />
        <Typography variant="h4" fontWeight="600" color={colors.grey[100]}>
          {title}
        </Typography>
      </Box>

      {/* Total clients */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="body1" color={colors.grey[100]}>
          Total clients
        </Typography>
        <Typography variant="h2" fontWeight="700" color={colors.grey[100]}>
          {data.totalClients}
        </Typography>
      </Box>

      {/* Combinaisons */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="body1" color={colors.grey[100]}>
          Combinaisons possibles
        </Typography>
        <Box
          sx={{
            backgroundColor: isB2B ? '#dbeafe' : '#d1fae5',
            color: isB2B ? '#1e40af' : '#065f46',
            px: 2,
            py: 0.5,
            borderRadius: '16px',
            fontWeight: '600'
          }}
        >
          {data.combinaisons}
        </Box>
      </Box>

      {/* Top 3 segments */}
      <Box>
        <Typography variant="h6" fontWeight="600" color={colors.grey[100]} mb={2}>
          Top 3 segments
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          {data.topSegments.map((segment, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body2" color={colors.grey[200]}>
                {segment.label}
              </Typography>
              <Typography variant="body1" fontWeight="600" color={colors.grey[100]}>
                {segment.value} ({segment.percentage}%)
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default SegmentCards;