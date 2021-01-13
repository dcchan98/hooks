/** @format */
import React, { useState, useEffect } from "react";

import fetchResult from "./fetchResults"

import SearchResult from "./SearchResult";


export default function Accordion(props) {
  const [term, setTerm] = useState("Programming Languages");
  
  const handleChange =(e)=> {
    setTerm(e.target.value);
  }
  useEffect(() => {
    // Update the document title using the browser API

    async function getArray(){
      const arrayOfResults = await fetchResult(term)
      return arrayOfResults;
    }

    console.log("myArr: "+getArray())

  
    document.title = `${term}`;

    // fetch should go here. Link logic here
  },[term]);


	return (
		<div>
			<input onChange = {(e)=> handleChange(e) }value={term} type='text' />
		</div>
	);
}
