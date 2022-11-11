import React, { useId, useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import TopicsList from "./TopicsList";

const Sidebar = () => {
	return (
		<aside className="h-[inherit] border-r border-base-content/20 block p-6">
			<SearchForm />
			<TopicsList />
		</aside>
	);
};

export default Sidebar;
