import HeadLine from "@/Components/dashboard-components/HeadLine";
import RaffleStats from "@/Components/dashboard-components/RaffleStats";
import RaffleTable from "@/Components/dashboard-components/RaffleTable";
import Link from "next/link";

const page = () => {
  return (
    <div className="space-y-6 p-6">
      <HeadLine />
      <RaffleStats />
      <Link
        href="/admindashboard/create-raffles"
        className={`flex items-start max-w-max justify-start  px-10 py-3 transition-colors bg-gradient-to-r from-[#37B9FF] to-[#027BBD] text-white font-semibold rounded-full`}
      >
        Create Raffle
      </Link>
      <div className="px-6 flex items-center justify-between mb-5 gap-3 md:gap-0">
        <h2 className="text-xl font-bold text-black mb-2 md:mb-0">
          All Raffles
        </h2>
        <div>
          <select
            className="px-2 py-2 rounded-full font-semibold border-2 border-gray-400 text-black bg-white transition focus:outline-none focus:ring-2 focus:ring-blue-300"
            defaultValue="all"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      <RaffleTable />
    </div>
  );
};

export default page;
