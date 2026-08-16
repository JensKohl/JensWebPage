import type React from "react";
import { useEffect, useState } from "react";

const ViewCounter: React.FC = () => {
	// 'views' holds the impression count as a formatted string, initialized to a loading placeholder '···'
	const [views, setViews] = useState<string>("···");

	// ---------------------------------------------------------------------------
	// ASYNC REST API CALL:
	// Runs once when the component is first mounted in the browser.
	// Sends a GET request to increment and fetch the total visit counter.
	// ---------------------------------------------------------------------------
	useEffect(() => {
		const key = "dr-jens-kohl-2025-final";

		fetch(`https://counterapi.com/api/${key}/up/visits`)
			.then((res) => {
				if (!res.ok) throw new Error(`HTTP error ${res.status}`);
				return res.json();
			})
			.then((data) => {
				const countValue = data?.value ?? data?.count;
				if (countValue !== undefined && countValue !== null) {
					// .toLocaleString() formats numbers with commas/dots based on user locale (e.g. 1,234)
					setViews(Number(countValue).toLocaleString());
				}
			})
			.catch(() => {
				// Graceful error recovery: if network fails or adblocker blocks the API, show "Offline"
				setViews("Offline");
			});
	}, []);

	return (
		<div className="mt-12 pt-8 border-t border-gray-100 group cursor-default w-full">
			<div className="flex flex-col gap-3 transition-all duration-700 opacity-50 group-hover:opacity-100">
				{/* Label Row */}
				<div className="flex items-center gap-2">
					<div className="h-[1px] w-4 bg-gray-400 group-hover:w-12 group-hover:bg-black transition-all duration-500"></div>
					<span className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-500 group-hover:text-black transition-colors">
						Metrics -- Live
					</span>
				</div>

				{/* Data Row */}
				<div className="flex items-baseline gap-2 pl-6">
					<span className="text-2xl font-light tracking-tighter text-gray-900 font-mono">
						{views}
					</span>
					<span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
						Impressions
					</span>
				</div>
			</div>
		</div>
	);
};

export default ViewCounter;
