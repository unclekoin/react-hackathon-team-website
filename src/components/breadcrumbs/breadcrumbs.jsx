import React from "react";
import { Link, useLocation } from "react-router-dom";
import members from "../../db/api.members";

const Breadcrumbs = () => {
	const location = useLocation();
	const breadCrumbsItems = [
		{ to: "/", label: "Home" },
		{ to: "/favourites", label: "Favourites" },
		{ to: "/contact", label: "Contact" },
		{ to: "/about", label: "About" },
		{ to: "/:memberId", label: "Member" }
	];

	const membersCrumbs = members.map((member) => {
		return { to: `/${member._id}`, label: `${member.firstName}` };
	});

	const allBreadCrumbs = [...breadCrumbsItems, ...membersCrumbs];

	const breadCrumbsData = (location) => {
		if (location !== "/" && location !== "/404") {
			return location.split("/").map((crumb) => "/" + crumb);
		}
		return [];
	};
	const locationArray = breadCrumbsData(location.pathname);
	const resultData = [];
	const totalLocation = (arrayPathString, dataPath) => {
		dataPath.forEach((path) => {
			arrayPathString.forEach((item) => {
				if (item === path.to) {
					resultData.push(path);
				}
			});
		});
	};
	totalLocation(locationArray, allBreadCrumbs);

	return (
		<div>
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					{resultData.map(({ to, label }) => (
						<Link
							key={to}
							to={to}
							className="breadcrumb-item active"
							aria-current="page"
						>
							{label}
						</Link>
					))}
				</ol>
			</nav>
		</div>
	);
};

export default Breadcrumbs;
