import React, { useState } from "react";
import Lottie from "lottie-react";
import hacker from "../assets/Animation/hacker.json";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<div
			name="home"
			className="w-full  bg-[#080708] flex justify-center content-center py-8"
		>
			{/* Container */}
			<div className="flex justify-center content-center">
				<div className="max-w-[800px] mx-auto px-16 flex flex-col justify-center h-full  w-4/6 smv:mx-0 w-full">
					<p className="text-[#F0A202] text-4xl">
						<span className="text-[#ff3b3b] text-4x1">Hello,</span> I'm
					</p>
					<h1 className="text-4xl sm:text-5xl font-bold text-[#ff3b3b]">
						<span className="text-[#F0A202] text-4xl sm:text-5xl font-bold">
							Heet
						</span>{" "}
						Dhorajiya
					</h1>
					<h2 className="text-4xl sm:text-5xl font-bold text-[#FFF3F0]">
						{/* I'm an <span className="text-[#F0A202]">aspiring</span>{" "}
						<span className="text-[#fb3b3b]"> software</span>{" "}
						<span className="text-[#F0A202]">engineer.</span> */}
						I'm an Aspiring Software Engineer.
					</h2>
					<p className="text-[#FFF3F0] py-4 max-w-[700px]">
						I'm a undergraduate student at{" "}
						<span className="text-[#fb3b3b]">IIT Patna. </span>I'm extremely keen in{" "}
						<span className="text-[#F0A202]">problem solving </span>
						and participating in challenges and{" "}
						<span className="text-[#F0A202]">hackathons.</span>I enjoy learning
						new technologies and challenges. Currently I am proficient in{" "}
						<span className="text-[#fb3b3b]"> Full stack web development</span>{" "}
						and I can build complex web application and can host and scale them.
					</p>
					<div>
						<button
							onClick={handleClick}
							className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#F0A202] hover:border-[#F0A202]"
						>
							<Link to="skills" smooth={true} duration={500}>
								Know More
							</Link>
							<span className="group-hover:rotate-90 duration-300">
								<HiArrowNarrowRight className="ml-3 " />
							</span>
						</button>
					</div>
				</div>

				<div className="max-w-[600px] py-16 h-100 mx-auto justify-center content-center hidden md:flex">
					<Lottie animationData={hacker} />;
				</div>
			</div>
		</div>
	);
};

export default Home;
