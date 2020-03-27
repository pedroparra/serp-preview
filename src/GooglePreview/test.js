import React from 'react'
import GooglePreview from '.'
import renderer from 'react-test-renderer'

it('show preview', () => {
  const tree = renderer
    .create(
      <GooglePreview
        title="test title"
        metadescription="meta description"
        url="test.com" />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
