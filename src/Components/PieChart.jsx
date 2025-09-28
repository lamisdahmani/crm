// src/Components/PieChart.jsx
import { Box, Typography, useTheme } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { tokens } from "../theme";

const CustomPieChart = ({ data, title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Box
          sx={{
            backgroundColor: colors.grey[700],
            padding: "8px 12px",
            borderRadius: "8px",
            border: `1px solid ${colors.grey[600]}`,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)"
          }}
        >
          <Typography variant="body2" color={colors.grey[100]}>
            {`${payload[0].name}: ${payload[0].value}%`}
          </Typography>
        </Box>
      );
    }
    return null;
  };

  return (
    <Box
      gridColumn="span 4"
      height="350px"
      backgroundColor={colors.grey[900]}
      p="20px"
      display="flex"
      flexDirection="column"
      borderRadius="12px"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
    >
      {/* Header */}
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
          {title}
        </Typography>
      </Box>
      
      {/* Pie Chart */}
      <Box height="250px" mb="20px">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={75}
              paddingAngle={2}
              dataKey="value"
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </Box>

      {/* Custom Legend */}
      <Box>
        {data.map((entry, index) => (
          <Box key={entry.id} display="flex" alignItems="center" justifyContent="space-between" mb="10px">
            <Box display="flex" alignItems="center">
              <Box
                width="12px"
                height="12px"
                backgroundColor={entry.color}
                borderRadius="50%"
                mr="8px"
              />
              <Typography variant="body2" color={colors.grey[100]}>
                {entry.label}
              </Typography>
            </Box>
            <Typography variant="body2" color={colors.grey[100]} fontWeight="bold">
              {entry.value}%
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CustomPieChart;