import { addDecorator, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /stories\.js$/);

// addDecorator(withInfo)

configure(
  () => req.keys().forEach(filename => req(filename)),
  module
);
