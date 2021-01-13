/** @format */

import React from "react";

export default function AccordionItem(props) {

  // toggle from active to inactive ( vice versa) to handle dropdown
  const activityState = "active"
  const contentIsActive = `content ${activityState}`


	return (
		<React.Fragment key = {props.hero.name}>
			<div onClick={props.handleClick} className='title active'>
				<i className='dropdown icon'></i>
				{props.hero.name}
			</div>
      {/* Add active class below to show content */}
			<div className={contentIsActive}>
				<p className=''>
        {props.hero.description}
				</p>
			</div>
	
		</React.Fragment>
	);
}
