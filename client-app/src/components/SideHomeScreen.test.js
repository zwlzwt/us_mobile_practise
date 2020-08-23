import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SideHomeScreen from './SideHomeScreen';


it('renders correctly react-test-renderer', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SideHomeScreen />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});