import React from "react";

const Hero = () => {
  return (
    <section className="bg-[url('/images/hero-bg.png')] h-[130vh] bg-cover bg-no-repeat bg-center flex flex-col items-center mb-[200px] font-allianceNo2">
      <div className="self-stretch text-center justify-start pt-[100px] mt-[50px]">
        <span className="text-white text-7xl font-medium font-chakrapetch">
          Hire Robots Instantly
          <br />
        </span>
        <span className="text-white/90 text-7xl font-light ">
          Pay in Crypto. Trust the Blockchain.
        </span>
      </div>
      <div className="max-w-[700px] opacity-80 text-center text-white text-xl font-normal my-6">
        Fleet Robotics is a decentralized marketplace where service robots
        operate as gig workers. Book delivery drones, cleaning bots, robots on
        demand
      </div>
      <div className="inline-flex justify-start items-center gap-1.5">
        <div className="w-60 p-3.5 bg-white rounded-sm flex justify-center items-center gap-2.5">
          <div className="justify-start text-black text-lg font-medium">
            Explore the Marketplace
          </div>
        </div>
        <div className="w-12 h-12 relative bg-white rounded-sm overflow-hidden">
          <div className="w-2.5 h-4 left-[21.33px] top-[16px] absolute">
            <div className="w-1 h-1 left-0 top-0 absolute bg-orange-600" />
            <div className="w-1 h-1 left-0 top-[13.33px] absolute bg-orange-600" />
            <div className="w-1 h-1 left-[6.67px] top-[6.67px] absolute bg-orange-600" />
          </div>
        </div>
      </div>

      <div className="text-white max-w-[500px] flex flex-col items-center mt-auto relative top-[100px]">
        <div className="border border-[#9A9A9A] flex flex-row text-white p-2 justify-between relative w-[400px]">
          <div className="text-nowrap">From Job Request</div>
          <div className="bg-[#FF3B0F] p-4 text-5xl rounded font-semibold absolute left-[40%] -top-5">5'</div>
          <div className="text-nowrap">To Deployed Robot</div>
        </div>
        <div className="text-white/70 font-normal text-center pt-9">From posting a job idea to watching a robot complete the task<span className="text-white"> takes just five minutes.</span> Create a request, fund it with escrow, and our marketplace matches you with the right machine instantly.</div>
      </div>
    </section>
  );
};

export default Hero;
