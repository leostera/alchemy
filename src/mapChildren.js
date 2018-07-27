import contramap from 'alchemy/contramap';

import { cloneElement, Children } from 'react';

/*
 * Map a component's children with a function to process it's props.
 *
 * All children's are preserved, and only their props can be changed.
 */

//    mapChildren : ((Props, Props, Index) -> Props) -> Component -> Props -> Component
const mapChildren = f =>
  contramap(props =>
    Object.assign({}, props, {
      children: Children.map(props.children, (child, index) =>
        cloneElement(child, f(props, child.props, index)),
      ),
    }),
  );

export default mapChildren;
