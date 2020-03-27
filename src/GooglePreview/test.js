import React from 'react'
import GooglePreview from '.'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

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
