import React from "react";

type Props = {};

const NotFoundPage = (props: Props) => {
	return (
		<main className="h-full overflow-y-scroll">
			<div className="flex justify-center items-center">
				<h1 className="text-2xl font-bold">404! Not Found</h1>
			</div>
		</main>
	);
};

export default NotFoundPage;
