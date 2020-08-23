import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SubmitButton from './SubmitButton';


it('renders correctly react-test-renderer', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SubmitButton />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});