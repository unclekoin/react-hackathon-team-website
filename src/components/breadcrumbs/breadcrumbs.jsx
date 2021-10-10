import React from "react";
import { Link, useLocation } from "react-router-dom";
import members from "../../db/api.members";

const Breadcrumbs = () => {
	const location = useLocation();
	const breadCrumbsItems = [
		{ to: "/", label: "Home" },
		{ to: "/favourites", label: "Favourites" },
<<<<<<< HEAD
		{ to: "/contacts", label: "Contact" },
=======
		{ to: "/contacts", label: "Contacts" },
>>>>>>> f830b1f1badb428c45ae65f017d37a234c67fe1c
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
    <div className='container pt-3 pb-0 text-center breadcrumb-style'>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          {resultData.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className='breadcrumb-item'
              aria-current='page'
            >
              {label}
            </Link>
          ))}
        </ol>
      </nav>
    </div>
  )
};

export default Breadcrumbs;
