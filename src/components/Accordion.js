/** @format */
import React from "react";

export default function Accordion(props) {
	const itemsToRender = props.items.map((hero) => {
		return (
			<div>
				<h1>{hero.name}</h1>
				<p>{hero.description}</p>
			</div>
		);
	});

	return <div>{itemsToRender}</div>;
}
