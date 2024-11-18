import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

// Sample Campaign Performance Data
const campaignPerformanceData = [
  { time: "Week 1", clicks: 500, conversions: 50, impressions: 2000 },
  { time: "Week 2", clicks: 800, conversions: 80, impressions: 3000 },
  { time: "Week 3", clicks: 1200, conversions: 150, impressions: 5000 },
  { time: "Week 4", clicks: 1500, conversions: 200, impressions: 6000 },
  { time: "Week 5", clicks: 1700, conversions: 220, impressions: 7000 },
];

const CampaignPerformanceChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Performance Over Time
      </h2>
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={campaignPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="time" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="clicks"
              stroke="#3B82F6" // Blue for Clicks
              strokeWidth={2}
              dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="conversions"
              stroke="#F59E0B" // Yellow for Conversions
              strokeWidth={2}
              dot={{ fill: "#F59E0B", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="impressions"
              stroke="#10B981" // Green for Impressions
              strokeWidth={2}
              dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CampaignPerformanceChart;
