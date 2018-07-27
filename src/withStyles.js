import contramap from 'alchemy/contramap';

/*
 * Define styles for a component as a function of it's props.
 *
 * This lets us add dynamic styling based on the properties passed on to a
 * component, preserving any already set styles if we want to, and overriding
 * any of them.
 *
 * All other props will be preserved.
 */

//    withStyles : (Props -> Styles) -> Component -> Props -> Component
const withStyles = f =>
  contramap(props => Object.assign({}, props, { style: f(props) }));

export default withStyles;
