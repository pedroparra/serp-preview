import React from 'react'
import styled from 'styled-components'
import {default as PT} from 'prop-types'

const Wrapper = styled.div`
  text-align: left;
  font-family: 'helvetica neue',helvetica,arial,sans-serif;
  max-width: 600px;
`
const Title = styled.h3`
  font-weight: normal;
  font-size: 18px;
  line-height: 1.308em;
  margin: 0;
  padding: 0;
`
const Description = styled.p`
  font-size: 13px;
  line-height: 16px;
  color: #525252;
  margin: 0;
  padding: 0;

  & em {
    font-weight: bold;
    font-style: normal;
  }
`
const Url = styled.cite`
  padding-bottom: 1px;
  line-height: 20px;
  font-size: 14px;
  color: #007542;
  word-wrap: break-word;
  font-style: normal;
  font-weight: 400;
  display: block;

  &::after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 4px; 
    height: 4px; 
    border-bottom: 2px solid #777;
    border-left: 2px solid #777;
    transform: rotate(-45deg) translateY(-2px);
    margin-left: 7px;
  }
`
const Link = styled.a`
  text-decoration: none;
  color: #000099;
  outline: 0;

  &:hover {
    text-decoration: underline;
  }
`

const formatUrl = (url) => url.replace(/https?:\/\//, '')

const YahooPreview = ({ title, description, url, link }) =>
  <Wrapper>
    <Title>
      <Link href={link}>{title}</Link>
    </Title>
    <Url>{formatUrl(url)}</Url>
    <Description>{description}</Description>
  </Wrapper>

YahooPreview.defaultProps = {
  description: null,
  link: '#'
}

YahooPreview.propTypes = {
  /** Title */
  title: PT.string.isRequired,
  /** Meta Description */
  description: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]),
  /** Url */
  url: PT.string.isRequired,
  /** Link for src */
  link: PT.string
}

export default YahooPreview
