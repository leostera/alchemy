import curry from 'ramda/src/curry';

/*
 * # Intuition
 *
 * Contramapping is similar to mapping in that it lets you compose functions
 * together.
 *
 * Whereas `map` puts functions _after_ each other:
 *
 *  [1, 2].map(f).map(g) === [f(1), f(2)].map(g) === [g(f(1)), g(f(2))]
 *
 * `contramap` puts functions _before_ each other:
 *
 *  [1, 2].contra(f).contra(g) == [g(1), g(2)].contra(f) == [f(g(1)), f(g(2))]
 *
 *
 * # Usage
 *
 * In this module, we are using `contramap` as a way for _preprocessing_
 * component props, so that we never create a lot of anonymous components. This
 * is immensely powerful and lets us extend the behavior of a component without
 * ever having to open it up and modify it.
 */

//		contramap : (a -> b) -> (b -> c) -> a -> c
const contramap = curry((f, g, x) => g(f(x)));

export default contramap;
