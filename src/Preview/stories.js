import React from 'react'
import { storiesOf } from '@storybook/react'
import SerpPreview from './'

const testResults = [
  {
    title: '🥇React – A JavaScript library for building user interfaces',
    metadescription: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
    url: 'reactjs.org'
  },
  {
    title: 'facebook/react: A declarative, efficient, and flexible ... - GitHub',
    metadescription: 'React. · React is a JavaScript library for building user interfaces. Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
    url: 'github.com › facebook › react'
  },
  {
    title: 'React Native · A framework for building native apps using React',
    metadescription: 'A framework for building native apps using React.',
    url: 'reactnative.dev'
  }
]


storiesOf('Preview')
  .add('Google', () => (
    <figure>
      { testResults.map(({ title, metadescription, url }, idx) =>
        <SerpPreview key={idx} title={title} metadescription={metadescription} url={url} />
      )}
    </figure>
  ))
  .add('Bing', () => (
    <figure>
      { testResults.map(({ title, metadescription, url }, idx) =>
        <SerpPreview key={idx} searchEngine="bing" title={title} metadescription={metadescription} url={url} />
      )}
    </figure>
  ))
  .add('Yahoo', () => (
    <figure>
      { testResults.map(({ title, metadescription, url }, idx) =>
        <SerpPreview key={idx} searchEngine="yahoo" title={title} metadescription={metadescription} url={url} />
      )}
    </figure>
  ))
