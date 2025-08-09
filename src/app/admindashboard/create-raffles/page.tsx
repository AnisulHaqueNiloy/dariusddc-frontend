
import HeadLine from "@/Components/dashboard-components/HeadLine"
import RaffleStats from "@/Components/dashboard-components/RaffleStats"
import RaffleCreationForm from "./RaffleCreationForm";



function page() {
  return (
    <>
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#1a1a1a]">Create Raffles</h1>
        <p className="text-[#1a1a1a] text-base">
          Launch your raffle in just a few steps.
        </p>
      </div>

      {/* Create Raffle Form */}
      <RaffleCreationForm />
    </>
  );

}

export default page;
