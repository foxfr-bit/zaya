function App() {
	const footerData = [
		{
			title: "Strategy",
			items: ["Research", "Positioning", "Story", "Naming"],
		},
		{
			title: "Design",
			items: [
				"Identity Design",
				"Brand Assets",
				"Print & Digital",
				"Motion",
			],
		},
		{
			title: "Experience",
			items: ["UI/UX", "Product Design", "Web", "Mobile"],
		},
		{
			title: "Storytelling",
			items: ["Messaging", "Campaigns", "Photographs", "Production"],
		},
	];
	return (
		<main className="bg-black min-w-[100vw] min-h-[100vh] flex items-center justify-center">
			<div className="max-w-7xl w-full mx-auto py-12 flex flex-col items-center px-8 md:px-4 space-y-24 justify-center">
				<div className="text-center">
					<img
						src="/images/Zayapng.png"
						alt="zaya logo"
						className="w-[400px] h-auto pt-12"
					/>
				</div>
				<div className="text-center md:pb-40">
					<h1 className="text-white font-bold text-4xl md:text-6xl">
						We are{" "}
						<span className="text-[#8C8C8C]">almost here!</span>
					</h1>
					<p className="text-white font-light text-xl lg:text-3xl mt-4">
						Finalizing a few things
					</p>
				</div>
				<div className="w-full lg:divide-y divide-[#8C8C8C]">
					<div className="flex flex-col lg:flex-row items w-full pb-12 divide-y lg:divide-y-0 lg:divide-x divide-[#8C8C8C]">
						<div className="grid grid-cols-2 gap-8 md:gap-0 md:grid-cols-4 flex-1 pr-12 pb-6 lg:pb-0">
							{footerData.map((data) => (
								<div className="">
									<h2 className="text-white font-bold text-xl lg:text-2xl">
										{data.title}
									</h2>
									<ul className="mt-2">
										{data.items.map((item) => (
											<li className="text-[#8C8C8C] font-light">
												{item}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
						<div className="w-full lg:w-[404px] flex items-center lg:items-end justify-center pt-6 lg:pt-0 lg:justify-end text-center lg:text-left">
							<div>
								<p className="text-white font-bold text-2xl">
									Get in touch
								</p>
								<a
									className="text-[#FFDAA2] font-bold text-3xl underline"
									href="mailto:hello@zaya.co.tz"
								>
									hello@zaya.co.tz
								</a>
							</div>
						</div>
					</div>
					<div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center justify-between sm:pt-8">
						<div className="">
							<p className="text-[#8C8C8C] font-light text-[15px] flex item-center space-x-8">
								<a
									href="https://x.com/zayastudioshq"
									target="_blank"
									rel="noreferrer"
									className="flex items-center space-x-2"
								>
									<svg
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clip-path="url(#clip0_118_25)">
											<path
												d="M4.37105 10.0664L10.0662 4.37128C10.153 4.28443 10.1782 4.15253 10.1299 4.03768C10.0813 3.92262 9.96886 3.84693 9.84483 3.84584L4.64099 3.79968C4.47146 3.79815 4.33562 3.934 4.33715 4.10353C4.33868 4.27306 4.47693 4.41131 4.64646 4.41284L9.11005 4.45243L3.93355 9.62893C3.81477 9.74771 3.81674 9.94174 3.93749 10.0625C4.05824 10.1832 4.25227 10.1852 4.37105 10.0664Z"
												fill="white"
											/>
											<path
												d="M10.1124 9.57513C10.1673 9.52022 10.201 9.44366 10.2003 9.359L10.1697 5.88963C10.1681 5.7201 10.0299 5.58185 9.86036 5.58032C9.69083 5.57879 9.55498 5.71463 9.55651 5.88416L9.58714 9.35353C9.58867 9.52306 9.72692 9.66131 9.89645 9.66285C9.98089 9.66372 10.0575 9.63003 10.1124 9.57513Z"
												fill="white"
											/>
										</g>
										<defs>
											<clipPath id="clip0_118_25">
												<rect
													width="9.89949"
													height="9.89949"
													fill="white"
													transform="translate(0 7) rotate(-45)"
												/>
											</clipPath>
										</defs>
									</svg>
									Twitter
								</a>
								<a
									href="https://www.instagram.com/zayastudioshq/"
									target="_blank"
									rel="noreferrer"
									className="flex items-center space-x-2"
								>
									<svg
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clip-path="url(#clip0_118_25)">
											<path
												d="M4.37105 10.0664L10.0662 4.37128C10.153 4.28443 10.1782 4.15253 10.1299 4.03768C10.0813 3.92262 9.96886 3.84693 9.84483 3.84584L4.64099 3.79968C4.47146 3.79815 4.33562 3.934 4.33715 4.10353C4.33868 4.27306 4.47693 4.41131 4.64646 4.41284L9.11005 4.45243L3.93355 9.62893C3.81477 9.74771 3.81674 9.94174 3.93749 10.0625C4.05824 10.1832 4.25227 10.1852 4.37105 10.0664Z"
												fill="white"
											/>
											<path
												d="M10.1124 9.57513C10.1673 9.52022 10.201 9.44366 10.2003 9.359L10.1697 5.88963C10.1681 5.7201 10.0299 5.58185 9.86036 5.58032C9.69083 5.57879 9.55498 5.71463 9.55651 5.88416L9.58714 9.35353C9.58867 9.52306 9.72692 9.66131 9.89645 9.66285C9.98089 9.66372 10.0575 9.63003 10.1124 9.57513Z"
												fill="white"
											/>
										</g>
										<defs>
											<clipPath id="clip0_118_25">
												<rect
													width="9.89949"
													height="9.89949"
													fill="white"
													transform="translate(0 7) rotate(-45)"
												/>
											</clipPath>
										</defs>
									</svg>
									Instagram
								</a>
								<a
									href="https://www.linkedin.com/company/zayastudios/?viewAsMember=true"
									target="_blank"
									rel="noreferrer"
									className="flex items-center space-x-2"
								>
									<svg
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clip-path="url(#clip0_118_25)">
											<path
												d="M4.37105 10.0664L10.0662 4.37128C10.153 4.28443 10.1782 4.15253 10.1299 4.03768C10.0813 3.92262 9.96886 3.84693 9.84483 3.84584L4.64099 3.79968C4.47146 3.79815 4.33562 3.934 4.33715 4.10353C4.33868 4.27306 4.47693 4.41131 4.64646 4.41284L9.11005 4.45243L3.93355 9.62893C3.81477 9.74771 3.81674 9.94174 3.93749 10.0625C4.05824 10.1832 4.25227 10.1852 4.37105 10.0664Z"
												fill="white"
											/>
											<path
												d="M10.1124 9.57513C10.1673 9.52022 10.201 9.44366 10.2003 9.359L10.1697 5.88963C10.1681 5.7201 10.0299 5.58185 9.86036 5.58032C9.69083 5.57879 9.55498 5.71463 9.55651 5.88416L9.58714 9.35353C9.58867 9.52306 9.72692 9.66131 9.89645 9.66285C9.98089 9.66372 10.0575 9.63003 10.1124 9.57513Z"
												fill="white"
											/>
										</g>
										<defs>
											<clipPath id="clip0_118_25">
												<rect
													width="9.89949"
													height="9.89949"
													fill="white"
													transform="translate(0 7) rotate(-45)"
												/>
											</clipPath>
										</defs>
									</svg>
									LinkedIn
								</a>
							</p>
						</div>
						<div className="">
							<p className="text-[#8C8C8C] font-light text-[15px] text-center">
								&copy;{new Date().getFullYear()} Zaya Creative
								Studios Ltd.
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default App;
