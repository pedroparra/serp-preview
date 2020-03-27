# serp-preview
[![Build Status](https://travis-ci.org/marketgoo/Ola.svg?branch=development)](https://travis-ci.org/marketgoo/Ola)
> React component for show how your website will appear in searchs engine results

## Highlights
- Multiple search engines
- Use styled-components
- Clean and tested

## Installation

Using npm:
```shell
$ npm i serp-preview
```

## Usage

```js
import { GooglePreview, BingPreview, YahooPreview } from "serp-preview";

const Example = () => (
  <div>

    <GooglePreview
      title="🥇React – A JavaScript library for building user interfaces"
      description="React makes it painless to create interactive UIs."
      url="https://reactjs.org"
      link="https://reactjs.org" />

    <BingPreview
      title="A declarative, efficient, and flexible ... - Wikipedia"
      description=""
      url="en.wikipedia.org › wiki › React"
      link="https://en.wikipedia.org/wiki/React" />

    <YahooPreview
      title="React Native · A framework for building native apps using React"
      description="A framework for building native apps using React."
      url="https://reactnative.dev"
      link="https://reactnative.dev" />

  </div>
)
```

## API

| Property | Prop Type | Required | Default | Description |
|----|----|----|----|---- |
| title| string| yes | -| Title |
| description| string / node / [nodes] | - | null | Metadescription |
| url| string| yes | -| Url |
| link| string| - | # | Link |
