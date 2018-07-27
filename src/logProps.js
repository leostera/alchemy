import curry from 'ramda/src/curry';

/**
 * Log all props for a given component.
 *
 * @func
 * @sig Component -> Props -> Element
 * @category Alchemy
 */
export default curry((component, props) => {
  if (props.debug) {
    console.log(
      props.displayName || component.displayName || component.name,
      props,
    );
  }
  return component(props);
});
