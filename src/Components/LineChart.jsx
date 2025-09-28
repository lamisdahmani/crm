// src/Components/LineChart.jsx
import { Box, Typography, useTheme } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { tokens } from "../theme";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const CustomLineChart = ({ data, title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Transform data for recharts format
  const transformedData = [];
  const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun"];
  
  months.forEach(month => {
    const monthData = { month };
    data.forEach(series => {
      const dataPoint = series.data.find(d => d.x === month);
      monthData[series.id] = dataPoint ? dataPoint.y : 0;
    });
    transformedData.push(monthData);
  });

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Box
          sx={{
            backgroundColor: colors.grey[700],
            padding: "12px",
            borderRadius: "12px",
            border: `1px solid ${colors.grey[600]}`,
            minWidth: "150px",
            boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.35)"
          }}
        >
          <Typography variant="body2" color={colors.grey[100]} fontWeight="bold" mb="8px">
            {label}
          </Typography>
          {payload.map((entry, index) => (
            <Typography key={index} variant="body2" color={entry.color} mb="4px">
              {`${entry.dataKey}: ${entry.value.toLocaleString()} DA`}
            </Typography>
          ))}
        </Box>
      );
    }
    return null;
  };

  // Custom legend
  const CustomLegend = ({ payload }) => {
    return (
      <Box display="flex" justifyContent="center" gap="20px" mt="10px">
        {payload.map((entry, index) => (
          <Box key={index} display="flex" alignItems="center">
            <Box
              width="12px"
              height="12px"
              backgroundColor={entry.color}
              borderRadius="2px"
              mr="8px"
            />
            <Typography variant="body2" color={colors.grey[100]}>
              {entry.value}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box
      gridColumn="span 8"
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
        <TrendingUpIcon sx={{ color: colors.redAccent[500], mr: "10px" }} />
        <Typography
          variant="h5"
          fontWeight="600"
          color={colors.grey[100]}
        >
          {title}
        </Typography>
      </Box>
      
      {/* Line Chart */}
      <Box height="250px">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={transformedData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={colors.grey[700]}
              opacity={0.3}
            />
            <XAxis 
              dataKey="month" 
              tick={{ fill: colors.grey[300], fontSize: 12 }}
              axisLine={{ stroke: colors.grey[600] }}
            />
            <YAxis 
              tick={{ fill: colors.grey[300], fontSize: 12 }}
              axisLine={{ stroke: colors.grey[600] }}
              tickFormatter={(value) => `${(value / 1000)}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
            
            {data.map((series) => (
              <Line
                key={series.id}
                type="monotone"
                dataKey={series.id}
                stroke={series.color}
                strokeWidth={3}
                dot={{ fill: series.color, strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, fill: series.color }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default CustomLineChart;