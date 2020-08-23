import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CheckBox from './CheckBox';


it('renders correctly react-test-renderer', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<CheckBox />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});