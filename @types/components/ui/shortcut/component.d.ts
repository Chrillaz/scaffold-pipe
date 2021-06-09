export interface ShortcutDescription {
    display: string;
    ariaLabel: string;
}
export interface Props {
    shortcut?: ShortcutDescription | string;
    className?: string;
}
declare const ConnectedShortcut: import("../context").PolymorphicComponent<"span", Props>;
export default ConnectedShortcut;
//# sourceMappingURL=component.d.ts.map