import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { projectsNav } from "./Data";
import { projectsData } from "./Data";
import WorksItems from "./WorksItems";

const Works = () => {
	const [item, setItem] = useState({ name: "all" });
	const [projects, setProjects] = useState([]);
	const [active, setActive] = useState(0);

	useEffect(() => {
		if (item.name === "All") {
			setProjects(projectsData);
		} else {
			const newProjects = projectsData.filter((project) => {
				return project.category.toLowerCase() === item.name;
			});
			setProjects(newProjects);
		}
	}, [item]);

	const handleClick = (e, index) => {
		setItem({ name: e.target.textContent.toLowerCase() });
		setActive(index);
	};

	return (
		<div>
			<div className="work__filters">
				{projectsNav.map((item, index) => {
					return (
						<span
							className={active === index ? "active-work" : "work__item"}
							key={index}
							onClick={(e) => {
								handleClick(e, index);
							}}
						>
							{item.name}
						</span>
					);
				})}
			</div>

			<div className="work__container container grid">
				{projects.map((item) => {
					return <WorksItems item={item} key={item.id} />;
				})}
			</div>
		</div>
	);
};

export default Works;