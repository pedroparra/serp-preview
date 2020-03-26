import React from 'react'
import styled from 'styled-components'
import {default as PT} from 'prop-types'

const Wrapper = styled.div`
  font: 13px/normal system-ui,sans-serif;
  text-align: left;
  color: #666;
  max-width: 600px;
`
const Title = styled.h3`
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
  padding: 0;
`
const Description = styled.p`
  font-size: 13px;
  line-height: 20px;
  color: inherit;
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
  word-wrap: break-word;
  font-style: normal;
  color: #006d21;
  display: block;

  &::after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 0; 
    height: 0; 
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid currentColor;
    margin-left: 5px;
  }
`
const Link = styled.a`
  text-decoration: none;
  color: #003dbf;
  outline: 0;

  &:hover {
    text-decoration: underline;
  }
`

const BingPreview = ({ title, description, url, link }) =>
  <Wrapper>
    <Title>
      <Link href={link}>{title}</Link>
    </Title>
    <Url>{url}</Url>
    <Description>{description}</Description>
  </Wrapper>

BingPreview.defaultProps = {
  description: null,
  link: '#'
}

BingPreview.propTypes = {
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

export default BingPreview
