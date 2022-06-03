import renderer from 'react-test-renderer';
import Display from '../Display';

it('Display component render', () => {
  const tree = renderer.create(<Display />).toJSON();
  expect(tree).toMatchSnapshot();
});
