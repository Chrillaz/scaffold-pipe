import type { SeparatorProps } from 'reakit';
export interface DividerProps extends Omit<SeparatorProps, 'children'> {
    /**
     * Adjusts all margins.
     */
    margin?: number;
    /**
     * Adjusts top margins.
     */
    marginTop?: number;
    /**
     * Adjusts bottom margins.
     */
    marginBottom?: number;
}
/**
 * `Divider` is a layout component that separates groups of related content.
 *
 * @example
 * ```js
 * import {
 *     __experimentalDivider as Divider,
 *     __experimentalText as Text }
 * from `@wordpress/components`;
 *
 * function Example() {
 * 	return (
 * 		<ListGroup>
 * 			<FormGroup>...</FormGroup>
 * 			<Divider />
 * 			<FormGroup>...</FormGroup>
 * 		</ListGroup>
 * 	);
 * }
 * ```
 */
declare const ConnectedDivider: import("../ui/context").PolymorphicComponent<"hr", DividerProps>;
export default ConnectedDivider;
//# sourceMappingURL=component.d.ts.map