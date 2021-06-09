export default ConnectedControlGroup;
/**
 * `ControlGroup` is a layout-based component for rendering a group of
 * control-based components, such as `Button`, `Select` or `TextInput`.
 * Control components that render within `ControlGroup` automatically
 * have their borders offset and border-radii rounded.
 *
 * @example
 * ```jsx
 * import { Button, ControlGroup, Select, TextInput } from `@wordpress/components/ui`;
 *
 * function Example() {
 *   return (
 *     <ControlGroup templateColumns="auto 1fr auto">
 *       <Select />
 *       <TextInput placeholder="First name" />
 *       <Button variant="primary" />
 *     </ControlGroup>
 *   );
 * }
 * ```
 */
declare const ConnectedControlGroup: import("../context").PolymorphicComponent<"div", import("./types").Props>;
//# sourceMappingURL=component.d.ts.map