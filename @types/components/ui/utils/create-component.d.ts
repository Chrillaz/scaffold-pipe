/// <reference types="react" />
import type { As } from 'reakit-utils/types';
import type { PolymorphicComponent, PropsFromPolymorphicComponentProps, ElementTypeFromPolymorphicComponentProps, PolymorphicComponentProps } from '../context';
interface Options<A extends As, P extends PolymorphicComponentProps<{}, A>> {
    as: A;
    name: string;
    useHook: (props: P) => any;
    memo?: boolean;
}
/**
 * Factory that creates a React component from a hook
 *
 * @param  options
 * @param  options.as      The element to render for the component.
 * @param  options.name    The name of the component.
 * @param  options.useHook The hook to use for the component
 * @param  options.memo    Whether to memo the component.
 * @return A polymorphic component that uses the hook to process props.
 */
export declare const createComponent: <A extends import("react").ElementType<any>, P extends PolymorphicComponentProps<{}, A>>({ as, name, useHook, memo, }: Options<A, P>) => PolymorphicComponent<ElementTypeFromPolymorphicComponentProps<P>, PropsFromPolymorphicComponentProps<P>>;
export {};
//# sourceMappingURL=create-component.d.ts.map