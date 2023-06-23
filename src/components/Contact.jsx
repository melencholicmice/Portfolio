import React from "react";

const Contact = () => {
	return (
		<div
			name="contact"
			className="w-full h-screen bg-[#080708] flex justify-center items-center p-4"
		>
			<form
				method="POST"
				action="https://getform.io/f/4e92d263-bf43-4c1f-a62e-5ddb3795fdee"
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-[#F0A202] text-gray-300">
						Contact
					</p>
					<p className="text-gray-300 py-4">
						Collobrate with me for hackathons, projects, or just say hi!
					</p>
				</div>
				<input
					className="bg-[#D8E1FF] p-2"
					type="text"
					placeholder="Name"
					name="name"
				/>
				<input
					className="my-4 p-2 bg-[#D8E1FF]"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<textarea
					className="bg-[#D8E1FF] p-2"
					name="message"
					rows="10"
					placeholder="Message"
				></textarea>
				<button className="text-white border-2 hover:bg-[#d4910d] hover:border--600 px-4 py-3 my-8 mx-auto flex items-center">
					Let's Collaborate
				</button>
			</form>
		</div>
	);
};

export default Contact;
