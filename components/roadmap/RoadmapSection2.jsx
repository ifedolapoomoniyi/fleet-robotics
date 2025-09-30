
import Image from "next/image";

const roadmapPhases = [
  {
    title: "Proof",
    description: "Viral demos (pay crypto - robot moves live)",
  },
  {
    title: "Standard",
    description: "Fleet IDs become the passport for machines.",
  },
  {
    title: "Monetization",
    description: "Robot data turns into assets.",
  },
  {
    title: "Infra",
    description: "Staking, insurance, DePIN integrations.",
  },
];

const details = [
  "Live crypto → robot actions",
  "Machine passports (Fleet IDs)",
  "Data → on-chain assets",
  "Staking & insurance rails",
];

const RoadmapSection2 = () => {
  return (
    <div
      className="
        w-full h-[700px] my-5 mb-25
        overflow-x-auto overflow-y-hidden md:overflow-visible
        scrollbar-thin scrollbar-thumb-[#FF3300] scrollbar-track-transparent
      "
      style={{ scrollbarColor: "#1e1e1e transparent", scrollbarWidth: "thin" }}
    >
      {/* Inner content must not shrink, force width */}
      <div className="min-w-[1000px] md:min-w-full bg-[url('/images/r-background.svg')] h-full flex flex-col relative">
        <div className="flex flex-row h-[500px]">
          <div className="flex-4">
            <h2 className="flex-4 text-6xl font-semibold m-10">Roadmap</h2>

            <div className="pr-5">
              <Image
                src={"/images/graph-line.svg"}
                alt="line"
                width={1280}
                height={1}
                className="w-full"
              />
            </div>
          </div>

          {/* Graph details */}
          <div className="flex-1 bg-gradient-to-r from-[#1D1D1D] to-black h-full w-full p-5 text-lg">
            <ul>
              {details.map((detail, index) => (
                <li key={index}>
                  <span className="inline-block bg-[#FF3300] mr-3 h-3 w-3"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>

      <div className="z-50 relative mt-5">
  {/* roadmap connecting line */}
  <div className="absolute top-[28px] left-0 right-0 h-[2px] bg-[#FF3300] z-0"></div>

  {/* Roadmap phases */}
  <div
    className="
      flex flex-row gap-5
      absolute justify-between
      top-[20px] md:px-40 left-0 right-0
      bg-black bg-gradient-to-b from-[#1A1A1A] to-black
      z-10 border-b pb-10 border-b-[#1D1D1D]
    "
  >
    {roadmapPhases.map((phases, id) => (
      <div key={id} className="flex-shrink-0 w-[250px] md:w-auto">
        <div
          className={`relative -top-4 w-5 h-5 rounded-full border border-[#FF3300] ${
            roadmapPhases.length === id + 1 ? "bg-[#FF3300]" : "bg-black"
          } mb-5`}
        ></div>
        <div className="text-3xl">{phases.title}</div>
        <div className="font-chakrapetch opacity-75 max-w-[200px] mt-2">
          {phases.description}
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default RoadmapSection2;
