/**
 * External dependencies
 */
import type { TooltipInitialState, TooltipProps } from 'reakit';
import type { ReactElement, ReactNode } from 'react';
/**
 * Internal dependencies
 */
import type { PopperProps } from '../utils/types';
import type { ShortcutProps } from '../shortcut';
export declare type Props = TooltipInitialState & PopperProps & Pick<ShortcutProps, 'shortcut'> & {
    /**
     * Determines if `Tooltip` has animations.
     */
    animated?: boolean;
    /**
     * The duration of `Tooltip` animations.
     *
     * @default 160
     */
    animationDuration?: boolean;
    /**
     * ID that will serve as a base for all the items IDs.
     *
     * @see https://reakit.io/docs/tooltip/#usetooltipstate
     */
    baseId?: string;
    /**
     * Content to render within the `Tooltip` floating label.
     */
    content?: ReactElement;
    /**
     * Spacing between the `Tooltip` reference and the floating label.
     *
     * @default 4
     *
     * @see https://reakit.io/docs/tooltip/#usetooltipstate
     */
    gutter?: number;
    /**
     * Whether or not the dialog should be rendered within `Portal`. It's true by default if modal is true.
     *
     * @default true
     *
     * @see https://reakit.io/docs/tooltip/#tooltip
     */
    modal?: boolean;
    /**
     * Whether `Tooltip` is visible.
     *
     * @default false
     *
     * @see https://reakit.io/docs/tooltip/#usetooltipstate
     */
    visible?: boolean;
    children: ReactElement;
    focusable?: boolean;
};
export declare type ContentProps = TooltipProps & {
    children: ReactNode;
};
//# sourceMappingURL=types.d.ts.map