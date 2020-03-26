import React from 'react'
import BingPreview from '.'
import renderer from 'react-test-renderer'

it('show preview', () => {
  const tree = renderer
    .create(
      <BingPreview
        title="test title"
        metadescription="meta description"
        url="test.com" />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
