import React from 'react'
import { Link } from 'gatsby'

export default ({link, title, dateCreated, author, tags, summary }) => (
  <div className="post on-list">
    <h1 className="post-title">
      <Link to={link}>
        {title}
      </Link>
    </h1>
    <div className="post-meta">
      <span className="post-date">
        {dateCreated}
      </span>
      <span>&nbsp;::&nbsp;</span>
      <span className="post-author">
        {author}
      </span>
    </div>
    <span className="post-tags">
      {tags.map(tag => <span>#{tag}&nbsp;</span>)}
    </span>
    <div className="post-content">
      {summary}
    </div>
    <div>
      <Link to={link} className="read-more button">Read More →</Link>
    </div>
  </div>
)