import React, { useId } from "react";
import { BsSearch } from "react-icons/bs";

type Props = {};

const SearchForm = (props: Props) => {
	const id = useId();

	return (
		<form
			action=""
			className="flex items-center gap-2 border border-base-content/50 rounded-lg px-3 focus:border-base-content mb-10"
		>
			<label htmlFor={id} className="hover:cursor-pointer">
				<BsSearch />
			</label>
			<input type="text" className="input border-none focus:outline-none w-full" placeholder="Tìm kiếm ..." />
			<button type="submit" className="hidden" id={id}></button>
		</form>
	);
};

export default SearchForm;
