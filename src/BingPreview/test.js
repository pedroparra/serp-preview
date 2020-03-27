import React from 'react'
import BingPreview from '.'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

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
