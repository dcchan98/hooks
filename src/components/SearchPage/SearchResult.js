import React from 'react'

function stripTag(html){
  let div = document.createElement("div");
  div.innerHTML = html;
  return div.innerText;
}

export default function SearchResult(props) {
  return (
    <div>
      <h3>{props.articleItem.title}</h3>
      <p>{stripTag(props.articleItem.snippet)}</p>
    </div>
  )
}
