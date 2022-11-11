import { list } from "../api/topics.api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Topic = {
	id: string;
	title: string;
};

const TopicsList = () => {
	const [topics, setTopics] = useState<Topic[]>([]);
	useEffect(() => {
		(async () => {
			const topicsList = (await list()) as unknown as Topic[];
			setTopics(topicsList);
		})();
	}, []);
	return (
		<ul className="menu gap-4 text-xl">
			{topics.map((topic) => (
				<li>
					<Link to={`/topic/:${topic.id}`}>{topic.title}</Link>
				</li>
			))}
		</ul>
	);
};

export default TopicsList;
