import Image from "next/image";

const MobileFleet = () => {
	return (
		<div>
			<div className="md:hidden grid grid-cols-1  w-full justify-end items-start right-1/6  h-full border border-[#1A1A1A] ">
				<div className="relative z-10 flex flex-col items-start gap-10 justify-start mb-[0px] md:ml-auto md:mr-10">
					<div className="max-w-[700px] opacity-90 text-left text-white text-xl font-normal my-6 px-5">
						<h2 className="mb-7 font-semibold text-xl">
							FLEET IDs
						</h2>
						<p className="font-light text-sm opacity-80">
							A Fleet ID records who owns the robot, who operates
							it, and builds a reputation log based on uptime,
							completed work, and feedback. On the technical side,
							IDs follow DID/NFT standards and can be tied to a
							robot’s hardware fingerprint (from a secure chip,
							controller, or TPM) to prevent spoofing. They’re
							portable across chains, so an ID created once can
							move wherever the network expands.
						</p>
					</div>
					<ul className="max-w-[850px] opacity-95 uppercase text-left text-white text-md font-normal my-6 px-5 list-none space-y-3">
						<li className="flex flex-row items-center gap-3">
							<Image
								src="/images/Frame%20108029.svg"
								alt="list-icon"
								width={10}
								height={10}
							/>
							Built on DID/NFT Standards
						</li>
						<li className="flex flex-row items-center gap-3">
							<Image
								src="/images/Frame%20108029.svg"
								alt="list-icon"
								width={10}
								height={10}
							/>
							Linked to secure hardware fingerprints (chip,
							controller, TPM)
						</li>
						<li className="flex flex-row items-center gap-3">
							<Image
								src="/images/Frame%20108029.svg"
								alt="list-icon"
								width={10}
								height={10}
							/>
							Portable across chains
						</li>
					</ul>
				</div>
				<div className="relative z-10 flex flex-col items-center mt-[20px] mb-[100px]"></div>
			</div>
		</div>
	);
};

export default MobileFleet;
