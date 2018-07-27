import curry from 'ramda/src/curry';
import withDefaultProps from 'alchemy/withDefaultProps';

/*
 * Sets display name for a component to ease debugging with React Dev Tools.
 *
 * Typically, a lambda that is exported will yield a component with the name
 * "Unknown" in the dev tools, this function helps by modifying the component
 * and adding the name to the props.
 *
 * @func
 * @sig String -> Component -> Component
 * @category Alchemy
 */
const withDisplayName = curry((displayName, component) => {
  const WithName = withDefaultProps({ displayName }, component);
  WithName.displayName = displayName;
  return WithName;
});

export default withDisplayName;
