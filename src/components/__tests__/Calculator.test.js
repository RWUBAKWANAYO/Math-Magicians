import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

it('Calculator page render', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
