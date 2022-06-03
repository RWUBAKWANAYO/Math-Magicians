import renderer from 'react-test-renderer';
import Home from '../Home';

it('Home page render', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
