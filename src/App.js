/** @format */

import { Component } from "react";
import Accordion from "./components/AccordionPage/Accordion";
import Search from "./components/SearchPage/Search";
const heroDescription = [
	{
		name: "Captain America",
		description:
			"America's ass lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
	},
	{
		name: "Iron Man",
		description:
			"Genius Billionaire orem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
	},
	{
		name: "Black Widow",
		description:
			"Chio bu orem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
	},
];

function App() {
	return (
		<div className='App'>
			<br />
			{/* <Accordion items={heroDescription} /> */}
      <Search/>
		</div>
	);
}

export default App;
