import React from 'react'

export default function SearchResult(props) {
  return (
    <div>
      <h3>{props.articleItem.title}</h3>
      <p>{props.articleItem.snippet}</p>
    </div>
  )
}
