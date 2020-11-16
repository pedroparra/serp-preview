import React from 'react'
import styled from 'styled-components'
import {default as PT} from 'prop-types'

const Wrapper = styled.div`
  background-color: white;
  line-height: 20px;
  -webkit-box-shadow: rgba(32,33,36,0.28) 0px 1px 6px;
  box-shadow: rgba(32,33,36,0.28) 0px 1px 6px;
  border-radius: 8px;
  max-width: 342px;
  width: auto;
  padding: 12px 16px;
  margin-bottom: 10px;
  color: #202124;
  font-family: arial, sans-serif;
`
const Title = styled.a`
  font-size: 16px;
  line-height: 20px;
  color: #1967D2;
  height: auto;
  min-height: 1em;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
const Description = styled.div`
  font-size: 14px;
  color: #3C4043;
  line-height: 1.58;
  margin-top: 7px;
`
const Url = styled.div`
  height: 19px;
  font-size: 12px;
  margin: 0 0 9px 0;
  cursor: pointer;
  color: #5f6368;
  max-width: 100%;
  padding-bottom: 1px;
  padding-top: 1px;
  display: flex;
  align-items: center;
`
const Icon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 8px;
`
const DomainWrapper = styled.span`
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
`
const DomainText = styled.span`
  color: #202124;
  font-size: 12px;
`

const formatUrl = (url) => url
  .replace(/https?:\/\//, '')
  .replace(/\//g, ' › ')

const GoogleMobilePreview = ({ title, description, url, link }) => {
  const domain = url ? formatUrl(url) : ''
  return (
    <Wrapper>
      <Url>
        <Icon src={`https://www.google.com/s2/favicons?domain=${domain}`} />
        <DomainWrapper>
          <DomainText>{domain}</DomainText>
        </DomainWrapper>
      </Url>
      <Title target='__blank' href={link}>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  )
}

GoogleMobilePreview.defaultProps = {
  description: null,
  link: '#'
}

GoogleMobilePreview.propTypes = {
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

export default GoogleMobilePreview
