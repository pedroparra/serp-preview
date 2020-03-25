import React from 'react'
import {default as PT} from 'prop-types'
// import cx from 'classnames'

const Title = ({ content }) => <h3>{content}</h3>

const MetaDescription = ({ content }) => <div className="metadescription">{content}</div>

const Url = ({ content }) => <cite>{content}</cite>

const Preview = ({ searchEngine, title, metadescription, url, link }) =>
  <div id="serp-preview" className={searchEngine}>
    <a href={link ? link : '#'}>
      <Title content={title} />
      <Url content={url} />
    </a>
    <MetaDescription content={metadescription} />
  </div>

Preview.defaultProps = {
  searchEngine: 'google',
  metadescription: null,
  link: null
}

Preview.title = {
  /** Search engine */
  searchEngine: PT.oneOf(['google', 'bing', 'yahoo']),
  /** Title */
  title: PT.string.isRequired,
  /** Meta Description */
  metadescription: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]),
  /** Url */
  url: PT.string.isRequired,
  /** Link for src */
  link: PT.string
}

export default Preview
