import curry from 'ramda/src/curry';
import React from 'react';

// Use this variable to access the switcher props. Unfortunately we can't use
// unserializable symbols can't be used here.
export const switch2$$props = '@@switch2::props';

/**
 * `switch2` is a combinator that takes 2 components, and lets you switch
 * between them by keeping a single bit of local state (0: use component A, 1:
 * use component B).
 *
 * @func
 * @sig Component -> Component
 * @category Alchemy
 * @example
 * import { switch2, switch2$$props } from 'elements/hoc/switch2';
 *
 * const A = props => <h1 onClick={props[switch2$$props].pickB}> Hello </h1>
 * const B = props => <pre onClick={props[switch2$$props].pickA}> world! </pre>
 *
 * const switch_between_a_and_b = switch2(A, B);
 *
 * // Calling createElement will use A by default, and A may pick B
 * React.createElement(switch_between_a_and_b, {}, []);
 * // <h1>Hello</h1>
 *
 * // if you click it it will become:
 * // <pre>world!</pre>
 *
 * // if you click again:
 * // <h1>Hello</h1>
 */
export const switch2 = curry((A, B) => {
  class Switcher extends React.Component {
    constructor(props) {
      super(props);
      this.props = props;
      this.component = A;
      this.pickA = this.pickA.bind(this);
      this.pickB = this.pickB.bind(this);
    }
    pickA(_event) {
      this.component = A;
      this.forceUpdate();
    }
    pickB(_event) {
      this.component = B;
      this.forceUpdate();
    }
    render() {
      return React.createElement(
        this.component,
        // TODO(@ostera): copying props like this is slow
        Object.assign({}, this.props, {
          [switch2$$props]: {
            pickA: this.pickA,
            pickB: this.pickB,
          },
        }),
        this.props.children,
      );
    }
  }
  // NOTE: we are wrapping this class component in a lambda to leverage
  // the HOCs/Alchemy combinators that work by contramapping arguments
  // This means we will have 1 extra layer added when using the Switcher
  // but any more stateless manipulations will reuse that same layer :)
  return props => React.createElement(Switcher, props, props.children);
});
