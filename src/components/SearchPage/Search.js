/** @format */
import React, { useState, useEffect } from "react";

import fetchResult from "./fetchResults"

import SearchResult from "./SearchResult";


export default function Accordion(props) {
  const [term, setTerm] = useState("This should be empty and handled later");
  
  const handleChange =(e)=> {
    setTerm(e.target.value);
  }
  useEffect(() => {
    // Update the document title using the browser API
    fetchResult(term)
    document.title = `${term}`;

    // fetch should go here. Link logic here
  });


	return (
		<div>
			<input onChange = {(e)=> handleChange(e) }value={term} type='text' />
		</div>
	);
}
