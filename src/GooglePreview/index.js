import React from 'react'
import styled from 'styled-components'
import {default as PT} from 'prop-types'

const Wrapper = styled.div`
  position: relative;
  font-family: arial, sans-serif;
  text-align: left;
  max-width: 600px;
`
const Title = styled.h3`
  display: inline-block;
  font-weight: normal;
  font-size: 20px;
  line-height: 1.3;
  margin: 0 0 3px 0;
  padding: 4px 0 0;
`
const Description = styled.div`
  color: #3C4043;
  line-height: 1.58;
  font-size: 14px;
  word-wrap: break-word;

  & em {
    font-weight: bold;
    font-style: normal;
  }
`
const Url = styled.cite`
  position: absolute;
  left: 0;
  top: 0;
  padding-top: 1px;
  padding-bottom: 1px;
  line-height: 1.3;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  width: 100%;
`

const UrlText = styled.span`
  font-size: 14px;
  color: #3C4043;
  font-style: normal;
  -webkit-text-size-adjust: none;
`

const Link = styled.a`
  text-decoration: none;
  color: #1a0dab;
  outline: 0;

  &:hover h3 {
    text-decoration: underline;
  }
`

const formatUrl = (url) => url
  .replace(/https?:\/\//, '')
  .replace(/\//g, ' › ')

const GooglePreview = ({ title, description, url, link }) =>
  <Wrapper>
    <Link href={link}>
      <br />
      <Title>{title}</Title>
      <Url>
        <UrlText>{formatUrl(url)}</UrlText>
      </Url>
    </Link>
    <Description>{description}</Description>
  </Wrapper>

GooglePreview.defaultProps = {
  description: null,
  link: '#'
}

GooglePreview.propTypes = {
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

export default GooglePreview
