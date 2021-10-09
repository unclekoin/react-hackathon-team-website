import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();
    const breadCrumbsItems = [
        { to: "/", label: "Home" },
        { to: "/favourites", label: "Favourites" },
        { to: "/contact", label: "Contact" },
        { to: "/about", label: "About" },
        { to: "/:memberId", label: "Member" }
    ];
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {breadCrumbsItems
                        // .filter((item) => item.to === location.pathname)
                        .map(({ to, label }) => (
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