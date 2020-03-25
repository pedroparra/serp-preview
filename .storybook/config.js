import { configure } from '@storybook/react'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /stories\.js$/);

configure(
  () => req.keys().forEach(filename => req(filename)),
  module
);
