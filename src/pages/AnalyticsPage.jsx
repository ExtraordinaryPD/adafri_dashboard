import Header from "../components/common/Header";

import OverviewCards from "../components/analytics/OverviewCards";
import CampaignData from "../components/overview/CampaignData";

const AnalyticsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Analytics"} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <OverviewCards />
        <CampaignData />
      </main>
    </div>
  );
};
export default AnalyticsPage;
