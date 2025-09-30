"use client";

  


export default function FeatureCard({title1, title2, description, details, index}) {

  return (
    <section className="flex flex-row">
      {/* Left Side */}
      <div className="bg-gradient-to-br from-[#fbe9e7] to-[#fbe9e7]/70 p-5 flex flex-col justify-center max-h-[400px] w-[500px]">
        <div className="flex flex-row justify-between w-full mb-auto h-full">
          <div className="text-sm uppercase tracking-wide text-gray-500 mb-2">
            <span className="inline-block w-3 h-3 bg-gray-400 mr-2 "></span>
            0{index + 1}
          </div>
          <div className="flex gap-4 justify-center h-fit items-center uppercase text-[#F43100]">
            What We Offer
            <span className="inline-block w-3 h-3 bg-[#F43100] mr-2"></span>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          {title1}<br /> {title2}
        </h2>
        <p className="text-gray-600 max-w-md">
            {description}
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col w-[470px]">
        <div className="flex flex-col divide-y divide-red-500">
          {details?.map((offer, i) => (
            <div
              key={i}
              className={` text-white p-5 hover:bg-red-700 transition-all duration-500  ${
                i % 2 == 0 ? "bg-[#FF3300]" : "bg-[#EE2F00]"
              }`}
            >
              <h3 className="text-xl font-bold">{offer.title}</h3>
              <p className="text-sm text-white/70">{offer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
