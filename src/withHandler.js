import curry from 'ramda/src/curry';
import contramap from 'alchemy/contramap';

/*
 * Sets up a handler for a component.
 *
 * This allows us to wrap a pre-existing component and add any handler
 * to it without having to open it and modify it.
 *
 * @func
 * @sig EventName -> (Props -> Event -> Void) -> Component -> Props -> Element
 * @category Alchemy
 */
const withHandler = curry((event, handler) =>
  contramap(props => Object.assign({}, props, { [event]: handler(props) })));

export default withHandler;
