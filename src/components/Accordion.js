/** @format */
import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion(props) {
	const [active, setActive] = useState(-1);

	const handleActive = (index) => {
		setActive( index)
	};

	const itemsToRender = props.items.map((hero, index) => {
    const isActive = index === active;
		// Change to item later
		return (
			<div>
				<AccordionItem isActive = {isActive} handleClick={() => handleActive(index)} hero={hero} />
			</div>
		);
	});

	return (
		<div>
			{active}
			<div className='ui styled accordion'>{itemsToRender}</div>
		</div>
	);
}
