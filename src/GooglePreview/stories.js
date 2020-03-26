import React from 'react'
import { storiesOf } from '@storybook/react'
import GooglePreview from './'

const testResults = [
  {
    title: '🥇React – A JavaScript library for building user interfaces',
    description: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
    url: 'https://reactjs.org'
  },
  {
    title: 'facebook/react: A declarative, efficient, and flexible ... - GitHub',
    description: <>React. · <em>React</em> is a JavaScript library for building user interfaces. Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</>,
    url: 'https://github.com/facebook/react'
  },
  {
    title: 'React Native · A framework for building native apps using React',
    description: 'A framework for building native apps using React.',
    url: 'https://reactnative.dev'
  }
]

storiesOf('Google')
  .add('Default', () => (
    testResults.map(({ title, description, url }, idx) =>
      <figure style={{marginBottom: '27px'}} key={idx}>
        <GooglePreview title={title} description={description} url={url} />
      </figure>
    )
  ))
