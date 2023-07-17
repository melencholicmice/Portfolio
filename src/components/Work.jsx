import React from "react";

import anwesha from "../assets/projects/anwesha.png";
import growsimplee from "../assets/projects/grow-simplee.png";

const anwesha_github = "https://github.com/Anwesha-2k23/backend";
const growsimplee_github =
	"https://github.com/melencholicmice/InterIIT-Grow-Simplee-Frontend";
const anwesha_live = "https.anwesha.live";

const Work = () => {
	return (
		<div name="work" className="w-full md:h-screen text-gray-300 bg-[#080708]">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#F0A202]">
						Projects
					</p>
					<p className="py-6">Check out some of my recent Projects</p>
				</div>
				<div className="flex flex-col md:flex-row justify-between content-between">
					<div className="py-8 px-8">
						<div
							key={1}
							style={{ backgroundImage: `url(${anwesha})` }}
							className="shadow-lg shadow-[#040c16] group container rounded-md
              flex justify-center text-center items-center content-div w-[400px] h-[300px] py-8 px-8 mx-8"
						>
							{/* Hover effect for images */}
							<div className="opacity-0 group-hover:opacity-100 ">
								<span className="text-2xl font bold text-white tracking-wider ">
									Anwesha festival website
								</span>
								<div className="pt-8 text-center ">
									{/* eslint-disable-next-line */}
									<a href={anwesha_github} target="_blank">
										<button
											className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
										>
											Code
										</button>
									</a>
									{/* eslint-disable-next-line */}
									<a href={anwesha_live} target="_blank">
										<button
											className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
										>
											Live
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="py-8 px-8">
						<div
							key={2}
							style={{ backgroundImage: `url(${growsimplee})` }}
							className="shadow-lg shadow-[#040c16] group container rounded-md
              flex justify-center text-center items-center content-div  w-[400px] h-[300px] py-8 px-8 mx-8"
						>
							{/* Hover effect for images */}
							<div className="opacity-0 group-hover:opacity-100 ">
								<span className="text-2xl font bold text-white tracking-wider ">
									Admin pannel Application
								</span>
								<div className="pt-8 text-center ">
									{/* eslint-disable-next-line */}
									<a href={growsimplee_github} target="_blank">
										<button
											className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
										>
											Code
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
