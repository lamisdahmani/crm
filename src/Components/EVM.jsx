import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const EVM = ({ data, title = "Évolution Valeur Mensuelle B2B" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Custom Tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Box
          sx={{
            backgroundColor: colors.grey[900],
            padding: "10px 15px",
            borderRadius: "8px",
            border: `1px solid ${colors.grey[700]}`,
          }}
        >
          <Typography variant="body2" color={colors.grey[100]}>
            {payload[0].payload.month}
          </Typography>
          <Typography variant="h6" color={colors.redAccent[500]} fontWeight="bold">
            {payload[0].value.toLocaleString()} DA
          </Typography>
        </Box>
      );
    }
    return null;
  };

  return (
    <Box
      backgroundColor={colors.grey[900]}
      borderRadius="12px"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      p="25px"
      height="400px"
    >
      {/* Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        color={colors.grey[100]}
        mb="20px"
      >
        {title}
      </Typography>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={colors.grey[700]} />
          <XAxis
            dataKey="month"
            stroke={colors.grey[100]}
            style={{ fontSize: "14px" }}
          />
          <YAxis
            stroke={colors.grey[100]}
            style={{ fontSize: "14px" }}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: colors.grey[800] }} />
          <Bar
            dataKey="value"
            fill={colors.redAccent[500]}
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default EVM;