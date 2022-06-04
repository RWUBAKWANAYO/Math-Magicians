import renderer from 'react-test-renderer';
import Buttons from '../Buttons';

it('Button component render', () => {
  const tree = renderer.create(<Buttons handleClick={(a = '1') => a} />).toJSON();
  expect(tree).toMatchSnapshot();
});
