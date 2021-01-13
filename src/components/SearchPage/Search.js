/** @format */
import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchResult from "./SearchResult";

export default function Accordion(props) {
  const [term, setTerm] = useState("Programming Languages");
  const [list,setList] =useState([]);

	const handleChange = (e) => {
		setTerm(e.target.value);
	};
	useEffect(() => {
    // Update the document title using the browser API
    if (term){ // handle undefined search exception 
      axios
			.get("https://en.wikipedia.org/w/api.php", {
				params: {
					action: "query",
					list: "search",
					origin: "*",
					format: "json",
					srsearch: term,
				},
			})
			.then((res) => {
				return res.data.query.search;
			})
			.then((results) => {
        console.log(results)
				setList(results);
			});
    }
    else if (!term){ // empty search term
      setList([]);
    }
		


		// fetch should go here. Link logic here
	}, [term]);

	return (
		<div>
			<input onChange={(e) => handleChange(e)} value={term} type='text' />
      {list.map((articleItem,index)=><SearchResult articleItem = {articleItem}/>)}
		</div>
	);
}
