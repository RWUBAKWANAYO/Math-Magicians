import renderer from 'react-test-renderer';
import Quotes from '../Quotes';

it('Quotes page render', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
