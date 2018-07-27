import withHandler from 'alchemy/withHandler';

/*
 * Sets up an onClick handler for a component.
 *
 * This allows us to wrap a pre-existing component and add an on-click handler
 * to it without having to open it and modify it.
 */

//    handleOnClick : ( props -> event -> Void ) -> Component -> Props -> Component
const handleOnClick = withHandler('onClick');

export default handleOnClick;
