import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Input from './Input';


it('renders correctly react-test-renderer', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Input />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});