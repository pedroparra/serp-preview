import React from 'react'
import Preview from './'
import renderer from 'react-test-renderer'

it('show default preview', () => {
  const tree = renderer
    .create(
      <Preview
        title="test title"
        metadescription="meta description"
        url="test.com" />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('show preview for bing', () => {
  const tree = renderer
    .create(
      <Preview
        searchEngine="bing"
        title="test title"
        metadescription="meta description"
        url="test.com" />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('show preview for yahoo', () => {
  const tree = renderer
    .create(
      <Preview
        searchEngine="yahoo"
        title="test title"
        metadescription="meta description"
        url="test.com" />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
