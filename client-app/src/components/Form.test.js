import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Form from './Form';


it('renders correctly react-test-renderer', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Form />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});