/** @format */

import React from "react";

export default function AccordionItem(props) {
	return (
		<React.Fragment key = {props.hero.name}>
			<div onClick={props.handleClick} className='title active'>
				<i className='dropdown icon'></i>
				{props.hero.name}
			</div>
			<div className='content active'>
				<p className='transition hidden'>
        {props.hero.description}
				</p>
			</div>
	
		</React.Fragment>
	);
}
