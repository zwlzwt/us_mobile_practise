import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MainHomeScreen from './MainHomeScreen';


it('renders correctly react-test-renderer', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MainHomeScreen />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});