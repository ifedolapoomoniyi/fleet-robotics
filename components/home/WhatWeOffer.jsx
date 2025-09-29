import FeatureCard from "./FeatureCard"


const features = [
    {
      title1: "Delivery",
      title2: "& Logistics",
      description:
        "Access cleaning, delivery, security, and inspection Window washing drones security, and inspection robots instantly",
      details: [
        {
          title: "Window washing drones",
          desc: "Window washing drones security, and inspection robots instantly.",
        },
        {
          title: "Disinfection robots",
          desc: "Disinfection window washing drones security, and inspection robots instantly.",
        },
        {
          title: "Window washing drones",
          desc: "Window washing drones security, and inspection robots instantly.",
        },
        {
          title: "Disinfection robots",
          desc: "Disinfection window washing drones security, and inspection robots instantly.",
        },
      ],
    },
    {
      title1: "Cleaning",
      title2: "& Maintenance",
            description:
        "Access cleaning, delivery, security, and inspection Window washing drones security, and inspection robots instantly",
      details: [
        {
          title: "Window washing drones",
          desc: "Window washing drones security, and inspection robots instantly.",
        },
        {
          title: "Disinfection robots",
          desc: "Disinfection window washing drones security, and inspection robots instantly.",
        },
        {
          title: "Commercial floor cleaning",
          desc: "Window washing drones security, and inspection robots instantly.",
        },
        {
          title: "Ooutdoor maintenance units",
          desc: "Disinfection window washing drones security, and inspection robots instantly.",
        },
      ],
    },
    {
      title1: "Industrial",
      title2: "& Inspection",
            description:
        "Access cleaning, delivery, security, and inspection Window washing drones security, and inspection robots instantly",
      details: [
        {
          title: "Window washing drones",
          desc: "Window washing drones security, and inspection robots instantly.",
        },
        {
          title: "Disinfection robots",
          desc: "Disinfection window washing drones security, and inspection robots instantly.",
        },
        {
          title: "Window washing drones",
          desc: "Window washing drones security, and inspection robots instantly.",
        },
        {
          title: "Disinfection robots",
          desc: "Disinfection window washing drones security, and inspection robots instantly.",
        },
      ],
    },
  ];

const WhatWeOffer = () => {
  return (
    <div className="min-h-[90vh] bg-[url('/images/what-we-do-bg.svg')] bg-cover bg-bottom mx-5 lg:mx-[80px] my-[100px]">
        <div className="flex flex-col items-center justify-center text-white mb-14">
            <div className="uppercase opacity-70 text-lg ">What we Offer</div>
            <h2 className="pb-5 text-6xl font-medium tracking-tight">Robot Services On-Demand</h2>
            <div className="text-center max-w-[600px] opacity-60 leading-5">Access cleaning, delivery, security, and inspection robots instantly. Pay only for completed work with simple, transparent pricing based on job complexity, duration and robot type</div>
        </div>

        {/* Cards */}

        <div className="flex flex-row overflow-scroll gap-10 scrollbar-hide pl-4 lg:pl-20">
          {features?.map((feature, key) =>(
            <FeatureCard description={feature.description} title1={feature.title1} title2={feature.title2} details={feature.details} key={key} index={key}/>
          ))}
        </div>
    </div>
  )
}

export default WhatWeOffer