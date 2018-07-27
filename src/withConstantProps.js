import curry from 'ramda/src/curry';
import contramap from 'alchemy/contramap';

/*
 * Return a component that will have some props passed in by default.
 *
 * @example
 *
 *  const Album = withConstantProps({ title: '2112' })(props => (
 *    <div>{props.name}</div>
 *  ));
 *
 *  <Album />  == <div>2112</div>
 *  <Album title="Master of Puppets" />  == <div>2112</div>
 *
 * @func
 * @sig Object -> Component -> Props -> Component
 * @category Alchemy
 */
const withConstantProps = curry((constants, component) =>
  contramap(props => Object.assign({}, props, constants), component));

export default withConstantProps;
