import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const campaignData = [
  {
    id: 1,
    name: "Black Friday Campaign",
    status: "Active",
    impressions: 120000,
    clicks: 4500,
    conversions: 750,
    budget: "$15,000",
  },
  {
    id: 2,
    name: "Holiday Campaign",
    status: "Completed",
    impressions: 95000,
    clicks: 3500,
    conversions: 600,
    budget: "$12,000",
  },
  {
    id: 3,
    name: "Spring Sale Campaign",
    status: "Upcoming",
    impressions: 0,
    clicks: 0,
    conversions: 0,
    budget: "$10,000",
  },
  {
    id: 4,
    name: "Summer Sale Campaign",
    status: "Completed",
    impressions: 85000,
    clicks: 3100,
    conversions: 500,
    budget: "$9,000",
  },
  {
    id: 5,
    name: "Year-End Campaign",
    status: "Active",
    impressions: 140000,
    clicks: 5200,
    conversions: 800,
    budget: "$20,000",
  },
];

const CampaignStatisticsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCampaigns, setFilteredCampaigns] = useState(campaignData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = campaignData.filter((campaign) =>
      campaign.name.toLowerCase().includes(term)
    );
    setFilteredCampaigns(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 w-full h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          Campaign Statistics
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search campaigns..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Campaign Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Impressions
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Clicks
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Conversions
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Budget
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredCampaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-100">
                    {campaign.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      campaign.status === "Active"
                        ? "bg-green-800 text-green-100"
                        : campaign.status === "Completed"
                        ? "bg-blue-800 text-blue-100"
                        : "bg-yellow-800 text-yellow-100"
                    }`}
                  >
                    {campaign.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {campaign.impressions.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {campaign.clicks.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {campaign.conversions.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {campaign.budget}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default CampaignStatisticsTable;
