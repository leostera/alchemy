import contramap from 'alchemy/contramap';
import append from 'ramda/src/append';
import is from 'ramda/src/is';

// addChild: child : Component -> (children : [Component] | Component | undefined)
//                                                    -> [Componet] | Component
const addChild = curry((child, children) => {
  if (!children) {
    return child;
  }
  if (is(Array, children)) {
    return append(child, children);
  }
  return [children, child];
});

/**
 * This function helps you add a child to your
 * React component.
 *
 * @func
 * @sig (Props -> Component) -> Component -> Props -> Component
 * @category Alchemy
 * @example
 * const TwoBulletPoints = compose(
 *    withChild(props => <li>Two</li>),
 *    withChild(props => <li>One</li>),
 * )(Box);
 * // <TwoBulletPoints/>
 * // would result in ->  <li>One</li><li>Two</li>
 *
 * const randomNumbers = [10, 5, 7];
 * const RandomNumberBulletList = compose(
 *    withChild(({randomNumbers}) => {
 *      randomNumbers.map(number => <li>{number}</li>)
 *    }),
 * )(Box);
 * // <RandomNumberBulletList randomNumbers={randomNumbers}/>
 * // would result in -> <li>10</li><li>5</li><li>7</li>
 * @see withStyles
 */
const withChild = f =>
  contramap(props =>
    Object.assign({}, props, { children: addChild(f(props))(props.children) }),
  );

export default withChild;
