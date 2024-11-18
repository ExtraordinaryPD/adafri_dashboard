import { BarChart2, DollarSign, Zap } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import CampaignTypeData from "../components/overview/CampaignTypeData"
import CampaignPerformanceChart from "../components/overview/CampaignPerformanceChart";
import CampaignStatisticsTable from "../components/overview/CampaignStatisticsTable";
import DailySalesTrend from "../components/sales/DailySalesTrend";

const OverviewPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Campaign Summary' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Active Campaigns' icon={Zap} value='567' color='#6366F1' />
					<StatCard name='Total Budget' icon={DollarSign} value='$12,345' color='#EC4899' />
					<StatCard name='CTR (Click-Through Rate)' icon={BarChart2} value='12.5%' color='#10B981' />
				</motion.div>

				{/* CHARTS */}

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<CampaignPerformanceChart />
					<CampaignTypeData />
					<CampaignStatisticsTable />
					<DailySalesTrend />
					
				</div>
			</main>
		</div>
	);
};
export default OverviewPage;
