import curry from 'ramda/src/curry';
import contramap from 'alchemy/contramap';

/*
 * Return a component that will have some props passed in by default.
 *
 * Sample:
 *
 *  const Album = withDefaultProps({ title: '2112' })(props => (
 *    <div>{props.name}</div>
 *  ));
 *
 *  <Album />  == <div>2112</div>
 *  <Album title="Master of Puppets" />  == <div>Master of Puppets</div>
 *
 * @func
 * @sig DefaultProps -> Component -> Props -> Component
 * @category Alchemy
 */
const withDefaultProps = curry((defaults, component) =>
  contramap(props => Object.assign({}, defaults, props), component));

export default withDefaultProps;
