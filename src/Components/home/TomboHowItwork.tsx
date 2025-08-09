import { Button } from "../ui/button"


export default function TombolyHowItWorks() {
  const steps = [
    {
      title: "Choose Raffle",
      description: "Pick from a variety of exciting home appliances and other products you'd love to win.",
    },
    {
      title: "Get Entered",
      description: "Pick from a variety of exciting home appliances and other products you'd love to win.",
    },
    {
      title: "Win & Celebrate!",
      description: "When the raffle ends, a winner is chosen randomly and fairly. If that's you congrats!",
    },
    {
      title: "Repeat",
      description: "Didn't win this time? No worries — coins roll over or can be used for another raffle.",
    },
  ]

  return (
    <section className="flex justify-center bg-gray-100 max-w-[1600px] mx-auto">
      <div className="6 flex flex-col items-center justify-center space-y-8">
        <h2 className="w-full font-bold tracking-tighter text-xl text-left md:text-2xl lg:text-[32px] lg:text-center">
          How Tomboly Works?
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 w-full ">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 lg:p-6 rounded-xl shadow-lg text-center
                         bg-gradient-to-t from-[#0089C0] to-[#1BBEFF] text-white
                         min-h-[200px] transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">{step.title}</h3>
              <p className="text-base lg:text-lg opacity-90">{step.description}</p>
            </div>
          ))}
        </div>
        <Button
          className="mt-8 px-8 py-3 text-lg font-semibold rounded-full
                     bg-gradient-to-r from-[#37B9FF] to-[#027BBD] text-white
                     shadow-lg transition-all duration-300 cursor-pointer"
        >
          Start Playing Now
        </Button>
      </div>
    </section>
  )
}
