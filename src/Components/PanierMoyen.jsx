import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const PanierMoyenFrequence = ({ data, title = "Panier Moyen & Fréquence d'Achat" }) => {
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
          <Typography variant="body2" color={colors.grey[100]} mb="5px">
            {payload[0].payload.month}
          </Typography>
          <Typography variant="body2" color={colors.redAccent[500]} fontWeight="bold">
            Panier: {payload[0].value} DA
          </Typography>
          <Typography variant="body2" color={colors.blueAccent[500]} fontWeight="bold">
            Fréquence: {payload[1].value}
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
      {/* Header avec icône */}
      <Box display="flex" alignItems="center" mb="20px">
        <ShoppingCartIcon
          sx={{ 
            color: colors.redAccent[500], 
            fontSize: "28px",
            mr: 2
          }} 
        />
        <Typography
          variant="h4"
          fontWeight="bold"
          color={colors.grey[100]}
        >
          {title}
        </Typography>
      </Box>

      {/* Line Chart */}
      <ResponsiveContainer width="100%" height="85%">
        <LineChart
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
            yAxisId="left"
            stroke={colors.grey[100]}
            style={{ fontSize: "14px" }}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke={colors.grey[100]}
            style={{ fontSize: "14px" }}
            domain={[0, 4]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ 
              paddingTop: "10px",
              fontSize: "14px"
            }}
            iconType="circle"
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="panierMoyen"
            stroke={colors.redAccent[500]}
            strokeWidth={3}
            dot={{ fill: colors.redAccent[500], r: 5 }}
            activeDot={{ r: 7 }}
            name="Panier Moyen (DA)"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="frequence"
            stroke={colors.blueAccent[500]}
            strokeWidth={3}
            dot={{ fill: colors.blueAccent[500], r: 5 }}
            activeDot={{ r: 7 }}
            name="Fréquence d'Achat"
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PanierMoyenFrequence;